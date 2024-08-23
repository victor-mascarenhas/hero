import styled from "styled-components";
import Nav from "../Nav";
import { useContext } from "react";
import { CharacterContext } from "../../state/context";

const Footer = () => {
  const state = useContext(CharacterContext);
  const { pages, current, array, onPageChange } = state.pagination;
  return (
    <FooterBg>
      <Nav
        onPageChange={onPageChange}
        current={current}
        array={array}
        pages={pages}
      />
    </FooterBg>
  );
};

export default Footer;

const FooterBg = styled.footer`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 100vw;
  height: 90px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
`;
