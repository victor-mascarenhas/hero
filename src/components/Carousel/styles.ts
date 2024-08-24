import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 200px;
  height: 280px;
  img {
    width: 150px;
    height: 200px;
  }
  h3 {
    margin-top: 4px;
    text-align: center;
    font-size: ${(props) => props.theme.sizes.large};
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.darkSmoke};
  }
`;
export const BtnWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
