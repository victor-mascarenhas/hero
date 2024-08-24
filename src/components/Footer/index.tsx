import Nav from "../Nav";
import { useContext } from "react";
import { CharacterContext } from "../../state/context";

import * as S from "./styles";
import useResize from "../../hooks/useResize";

const Footer = () => {
  const state = useContext(CharacterContext);
  const { pages, current, numList, onPageChange } = state.pagination;
  const { isLoading } = state.loading;
  const { isMobile } = useResize();
  const list = isMobile ? numList.slice(0, 3) : numList;
  return (
    <S.FooterBg>
      <Nav
        onPageChange={onPageChange}
        current={current}
        numList={list}
        pages={pages}
        isLoading={isLoading}
      />
    </S.FooterBg>
  );
};

export default Footer;
