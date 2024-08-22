import { useState } from "react";
import { Character } from "./types";

export const useCharacter = () => {
  const [charList, setData] = useState<Character[]>([]);
  const onChangeCharList = (charList: Character[]) => {
    setData(charList);
  };
  return {
    data: charList,
    onChangeCharList,
  };
};
