export type paginationProps = {
  onPageChange: (arg: number) => void;
  current: number;
  numList: number[];
  pages: number;
  isLoading: boolean;
};
