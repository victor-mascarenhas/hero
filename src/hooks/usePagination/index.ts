import { useState } from "react";

const maxNumBtns = 9;
const maxLeftBtns = (maxNumBtns - 1) / 2;
const limit = 10;

export const usePagination = () => {
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(1000);
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (maxNumBtns - 1), 1);
  const first = Math.min(Math.max(current - maxLeftBtns, 1), maxFirst);

  const onPageChange = (page: number) => {
    if (setOffset) {
      setOffset((page - 1) * limit);
    }
  };
  const onTotalChange = (total: number) => {
    if (setTotal) {
      setTotal(total);
    }
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
