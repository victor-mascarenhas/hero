import { useState } from "react";
import { Character, CharResources, UpdateResourceProps } from "./types";

export const useCharacter = () => {
  const [charList, setData] = useState<Character[]>([]);
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [selectedCharResources, setCharResources] =
    useState<CharResources | null>(null);
  const onChangeCharList = (charList: Character[]) => {
    setData(charList);
  };
  const onChangeSelectedChar = (charInfo: Character | null) => {
    setSelectedChar(charInfo);
  };

  const onUpdateSelectedCharResources = (
    charResource: UpdateResourceProps | null
  ) => {
    if (charResource === null) {
      setCharResources(charResource);
      return;
    }
    setCharResources((previous) => {
      return { ...previous, [charResource.name]: charResource.resource };
    });
  };

  return {
    charList,
    onChangeCharList,
    selectedChar,
    onChangeSelectedChar,
    selectedCharResources,
    onUpdateSelectedCharResources,
  };
};
