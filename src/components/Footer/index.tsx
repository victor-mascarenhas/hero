import Nav from "../Nav";
import { useContext } from "react";
import { CharacterContext } from "../../state/context";

import * as S from "./styles";
import useResize from "../../hooks/useResize";

const Footer = () => {
  const state = useContext(CharacterContext);
  const { pages, current, array, onPageChange } = state.pagination;
  const { isLoading } = state.loading;
  const { isMobile } = useResize();
  const arr = isMobile ? array.slice(0, 3) : array;
  return (
    <S.FooterBg>
      <Nav
        onPageChange={onPageChange}
        current={current}
        array={arr}
        pages={pages}
        isLoading={isLoading}
      />
    </S.FooterBg>
  );
};

export default Footer;
