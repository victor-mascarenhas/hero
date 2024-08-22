import { ReactNode } from "react";
import { Character } from "../hooks/useCharacter/types";

export type ProviderProps = {
  children?: ReactNode;
};

export type CharacterState = {
  charList: {
    data: Character[];
    onChangeCharList: (arg: Character[]) => void;
  };
  loading: {
    isLoading: boolean;
    onChangeLoading: (arg: boolean) => void;
  };
  error?: Error;
  pagination: {
    offset: number;
    onPageChange: (arg: number) => void;
    total: number;
    onTotalChange: (arg: number) => void;
    pages: number;
    current: number;
    array: number[];
    limit: number;
  };
};
