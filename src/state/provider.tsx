import { CharacterContext } from "./context";
import { ProviderProps } from "./types";
import { useLoading } from "../hooks/useLoading";
import { useCharacter } from "../hooks/useCharacter";
import { usePagination } from "../hooks/usePagination";

export const CharacterProvider = ({ children }: ProviderProps) => {
  const charData = useCharacter();
  const loading = useLoading();
  const pagination = usePagination();

  return (
    <CharacterContext.Provider
      value={{
        charData,
        loading,
        pagination,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
