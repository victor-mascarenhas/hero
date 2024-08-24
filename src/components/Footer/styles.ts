import styled from "styled-components";

export const FooterBg = styled.footer`
  background: ${(props) => props.theme.colors.white};
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
