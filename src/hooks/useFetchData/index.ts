import { useCallback, useContext } from "react";
import Crypto from "crypto-js";
import { CharacterContext } from "../../state/context";
import { otherResourceProps } from "./types";
import { OtherResource } from "../useCharacter/types";

const baseURL = "https://gateway.marvel.com/v1/public/characters";
const publicKey = "4cba1ed683b92b3d3ffb0b56dbc9a8d2";
const privateKey = import.meta.env.VITE_API_SECRET_KEY;
const time = Date.now();
const hash = Crypto.MD5(time + privateKey + publicKey);

const parseResources = (data: any[]) => {
  const parsedData = data.map((item) => {
    const parseObj: OtherResource = {
      id: item.id,
      title: item.title,
      description: item.description,
      thumbnail: item.thumbnail,
    };
    return parseObj;
  });

  return parsedData;
};

export const useFetchData = () => {
  const state = useContext(CharacterContext);
  const { onChangeLoading } = state.loading;
  const { onChangeCharList, onUpdateSelectedCharResources } = state.charData;
  const { limit, onTotalChange, offset } = state.pagination;

  const baseParams = `?ts=${time}&apikey=${publicKey}&hash=${hash}`;
  const baseQs = `${baseURL}${baseParams}`;

  const getCharData = useCallback(
    (name?: string) => {
      let charQs = baseQs + `&offset=${offset}&limit=${limit}`;
      if (name) {
        charQs = charQs + `&name=${name}`;
      }
      try {
        onChangeLoading(true);
        fetch(charQs)
          .then((response) => response.json())
          .then((response) => {
            onChangeCharList(response.data.results);
            onTotalChange(response.data.total);
            onChangeLoading(false);
          });
      } catch (err) {
        onChangeLoading(false);
        console.log(err);
      }
    },
    [offset]
  );
  const getOtherResource = ({ charId, resource }: otherResourceProps) => {
    const finalQs = `${baseURL}/${charId}/${resource}${baseParams}`;
    try {
      onChangeLoading(true);
      fetch(finalQs)
        .then((response) => response.json())
        .then((response) => {
          onUpdateSelectedCharResources({
            name: resource,
            resource: parseResources(response.data.results),
          });
          onChangeLoading(false);
        });
    } catch (err) {
      onChangeLoading(false);
      console.log(err);
    }
  };

  return { getCharData, getOtherResource };
};
