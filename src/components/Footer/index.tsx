import styled from "styled-components";
import Nav from "../Nav";
import { useContext, useState } from "react";
import { CharacterContext } from "../../state/context";

const Footer = () => {
  const state = useContext(CharacterContext);
  const { pages, current, array, onPageChange } = state.pagination;
  const { isLoading } = state.loading;
  const [size, setSize] = useState(window.innerWidth);
  addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  const mobile = size <= 768;
  const arr = mobile ? array.slice(0, 3) : array;
  return (
    <FooterBg>
      <Nav
        onPageChange={onPageChange}
        current={current}
        array={arr}
        pages={pages}
        isLoading={isLoading}
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
  @media (max-width: 768px) {
    padding: 0 8%;
  }
`;
