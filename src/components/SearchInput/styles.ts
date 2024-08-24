import styled from "styled-components";

export const Container = styled.div`
  color: #555555;
  font-weight: 700;
  font-family: PT Sans Caption;
  text-align: start;
  margin: 40px 0px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 16px;
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
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 295px;
  height: 32px;
  font-family: PT Sans;
  font-style: italic;
  padding: 17px;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
