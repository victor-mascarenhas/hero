import { paginationProps } from "./types";

const Pagination = ({
  onPageChange,
  current,
  array,
  pages,
}: paginationProps) => {
  return (
    <ul>
      <li>
        <button
          disabled={current === 1}
          onClick={() => onPageChange(current - 1)}
        >
          Anterior
        </button>
      </li>
      {array.map((page, i) => (
        <li key={i}>
          <button onClick={() => onPageChange(page)}>{page}</button>
        </li>
      ))}
      <button
        disabled={current === pages}
        onClick={() => onPageChange(current + 1)}
      >
        Próxima
      </button>
    </ul>
  );
};

export default Pagination;
