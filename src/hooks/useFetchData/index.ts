import { useContext, useEffect, useMemo, useState } from "react";
import { baseURL, hash, publicKey, time } from "../../api";
import { CharacterContext } from "../../state/context";

export const useFetchData = () => {
  const state = useContext(CharacterContext);
  const pagination = state?.pagination;
  const offset = pagination.offset;
  const limit = pagination.limit;
  const setTotal = state?.pagination.onTotalChange || console.log; //CORRIGIR
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      console.log("fetching...");
      setLoading(true);
      fetch(
        `${baseURL}?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=${limit}`
      )
        .then((response) => response.json())
        .then((response) => {
          setData(response.data.results);
          setTotal(response.data.total);
        });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  return {
    data: useMemo(() => data ?? data, [data]),
    isLoading: loading,
  };
};
