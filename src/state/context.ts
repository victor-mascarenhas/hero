import { createContext } from "react";
import { CharacterState } from "./types";

const initial: CharacterState = {
  data: [],
  isLoading: false,
  pagination: {
    limit: 10,
    offset: 0,
    total: 1500,
  },
};

export const CharacterContext = createContext<CharacterState>(initial);
