import { useCallback, useState } from "react";
import useResize from "../useResize";

export const usePagination = () => {
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const { isMobile } = useResize();
  const maxNumBtns = isMobile ? 3 : 5;
  const maxLeftBtns = (maxNumBtns - 1) / 2;
  const limit = 10;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (maxNumBtns - 1), 1);
  const first = Math.min(Math.max(current - maxLeftBtns, 1), maxFirst);

  const onPageChange = useCallback((page: number) => {
    setOffset((page - 1) * limit);
  }, []);
  const onTotalChange = (total: number) => {
    setTotal(total);
  };

  const numList = Array.from({ length: Math.min(maxNumBtns, pages) }).map(
    (_, i) => i + first
  );
  return {
    offset,
    onPageChange,
    onTotalChange,
    total,
    pages,
    current,
    numList,
    limit,
  };
};
