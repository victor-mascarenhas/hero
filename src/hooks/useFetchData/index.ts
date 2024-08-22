import { useContext } from "react";
import Crypto from "crypto-js";
import { CharacterContext } from "../../state/context";

const baseURL = "https://gateway.marvel.com/v1/public/characters";
const publicKey = "4cba1ed683b92b3d3ffb0b56dbc9a8d2";
const privateKey = "cc901a91aa7568c57ff62a7318ada0083da8ede4";
const time = Date.now();
const hash = Crypto.MD5(time + privateKey + publicKey);

export const useFetchData = () => {
  const state = useContext(CharacterContext);
  const { onChangeLoading } = state.loading;
  const { onChangeCharList } = state.charList;
  const { limit, onTotalChange, offset } = state.pagination;

  const getData = () => {
    try {
      console.log("fetching...");
      onChangeLoading(true);
      fetch(
        `${baseURL}?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`
      )
        .then((response) => response.json())
        .then((response) => {
          onChangeCharList(response.data.results);
          onTotalChange(response.data.total);
          onChangeLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return { getData };
};
