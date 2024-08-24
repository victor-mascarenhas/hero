import { ReactNode } from "react";
import {
  Character,
  CharResources,
  UpdateResourceProps,
} from "../hooks/useCharacter/types";

export type ProviderProps = {
  children?: ReactNode;
};

export type CharacterState = {
  charData: {
    charList: Character[];
    onChangeCharList: (arg: Character[]) => void;
    selectedChar: Character | null;
    onChangeSelectedChar: (arg: Character | null) => void;
    selectedCharResources: CharResources | null;
    onUpdateSelectedCharResources: (arg: UpdateResourceProps | null) => void;
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
