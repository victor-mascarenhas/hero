import { createContext } from "react";
import { CharacterState } from "./types";

const initial = {
  charData: {
    charList: [],
    onChangeCharList: () => {},
    selectedChar: null,
    onChangeSelectedChar: () => {},
    selectedCharResources: null,
    onUpdateSelectedCharResources: () => {},
  },
  loading: {
    isLoading: false,
    onChangeLoading: () => {},
  },
  pagination: {
    offset: 0,
    total: 0,
    onPageChange: () => {},
    onTotalChange: () => {},
    pages: 1,
    current: 1,
    array: [],
    limit: 0,
  },
};
export const CharacterContext = createContext<CharacterState>(initial);
