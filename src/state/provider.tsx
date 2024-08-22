import { CharacterContext } from "./context";
import { useFetchData } from "../hooks/useFetchData";
import { usePagination } from "../hooks/usePagination";
import { ProviderProps } from "./types";

export const CharacterProvider = ({ children }: ProviderProps) => {
  const { data, isLoading } = useFetchData();
  const { offset, limit, onPageChange, onTotalChange, total } = usePagination();
  const pagination = { offset, limit, onPageChange, total, onTotalChange };
  return (
    <CharacterContext.Provider value={{ data, isLoading, pagination }}>
      {children}
    </CharacterContext.Provider>
  );
};
