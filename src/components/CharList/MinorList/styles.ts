import styled from "styled-components";

export const ListMinor = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 33%;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: ${(props) => props.theme.sizes.medium};
  text-align: start;
  color: ${(props) => props.theme.colors.darkSmoke};
`;
