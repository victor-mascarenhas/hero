import Nav from "../Nav";
import { useContext } from "react";
import { CharacterContext } from "../../state/context";

import * as S from "./styles";

const Footer = () => {
  const state = useContext(CharacterContext);
  const { pages, current, numList, onPageChange } = state.pagination;
  const { isLoading } = state.loading;

  return (
    <S.FooterBg>
      <Nav
        onPageChange={onPageChange}
        current={current}
        numList={numList}
        pages={pages}
        isLoading={isLoading}
      />
    </S.FooterBg>
  );
};

export default Footer;
