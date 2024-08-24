import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.darkSmoke};
  font-weight: ${(props) => props.theme.weight.bold};
  font-family: PT Sans Caption;
  text-align: start;
  margin: 40px 0px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes.xlarge};
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.sizes.large};
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 260px;
    top: 6px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
  @media (max-width: 768px) {
    img {
      left: calc(100% - 45px);
    }
  }
`;

export const StyledInput = styled.input`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 295px;
  height: 32px;
  font-family: ${(props) => props.theme.fonts.main};
  font-style: italic;
  padding: 17px;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
