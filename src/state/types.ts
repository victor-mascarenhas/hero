import { Character } from "../hooks/useFetchData/types";
import { ReactNode } from "react";

export type CharacterState = {
  data: Character[];
  isLoading: boolean;
  error?: Error;
  pagination: {
    limit: number;
    offset: number;
    total: number;
    onPageChange?: (arg: number) => void;
    onTotalChange?: (arg: number) => void;
  };
};

export type ProviderProps = {
  children?: ReactNode;
};
