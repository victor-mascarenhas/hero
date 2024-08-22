import { useContext, useState } from "react";
import { CharacterContext } from "../../state/context";

const maxNumBtns = 9;
const maxLeftBtns = (maxNumBtns - 1) / 2;

export const usePagination = () => {
  const state = useContext(CharacterContext);
  const limit = state.pagination.limit;

  const [offset, setOffset] = useState(state.pagination.offset);
  const [total, setTotal] = useState(state.pagination.total);

  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (maxNumBtns - 1), 1);
  const first = Math.min(Math.max(current - maxLeftBtns, 1), maxFirst);

  const onPageChange = (page: number) => {
    setOffset((page - 1) * limit);
    console.log(offset);
  };
  const onTotalChange = (total: number) => {
    setTotal(total);
  };

  const array = Array.from({ length: Math.min(maxNumBtns, pages) }).map(
    (_, i) => i + first
  );
  return {
    offset,
    onPageChange,
    onTotalChange,
    total,
    pages,
    current,
    array,
    limit,
  };
};
