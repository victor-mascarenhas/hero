import { paginationProps } from "./types";
import LeftIcon from "../../assets/icons8-voltar-64.png";
import RightIcon from "../../assets/icons8-avançar-64.png";
import DoubleLeftIcon from "../../assets/icons8-duplo-para-a-esquerda-64.png";
import DoubleRightIcon from "../../assets/icons8-duplo-para-a-direita-64.png";

import * as S from "./styles";

const Nav = ({
  onPageChange,
  current,
  array,
  pages,
  isLoading,
}: paginationProps) => {
  return (
    <S.PagWrapper>
      <S.PagBtnList>
        {!isLoading && (
          <>
            <li>
              <S.ArrowBtn
                disabled={current === 1}
                onClick={() => onPageChange(1)}
              >
                <img src={DoubleLeftIcon} height={24} width={24} />
              </S.ArrowBtn>
            </li>
            <li>
              <S.ArrowBtn
                disabled={current === 1}
                onClick={() => onPageChange(current - 1)}
              >
                <img src={LeftIcon} height={24} width={24} />
              </S.ArrowBtn>
            </li>
          </>
        )}

        {isLoading ? (
          <>
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-avatar"></div>
          </>
        ) : (
          array.map((page, i) => (
            <li key={i}>
              <S.PagBtn
                className={
                  page === current ? "pagination__item--active" : undefined
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </S.PagBtn>
            </li>
          ))
        )}
        {!isLoading && (
          <>
            <li>
              <S.ArrowBtn
                disabled={current === pages}
                onClick={() => onPageChange(current + 1)}
              >
                <img src={RightIcon} height={24} width={24} />
              </S.ArrowBtn>
            </li>
            <li>
              <S.ArrowBtn
                disabled={current === pages}
                onClick={() => onPageChange(pages)}
              >
                <img src={DoubleRightIcon} height={24} width={24} />
              </S.ArrowBtn>
            </li>
          </>
        )}
      </S.PagBtnList>
    </S.PagWrapper>
  );
};

export default Nav;
