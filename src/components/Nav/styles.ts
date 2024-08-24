import styled from "styled-components";

export const PagWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
  .active {
    background: ${(props) => props.theme.colors.darkBlue};
    border: 1px solid #167abc;
    letter-spacing: 0px;
    color: ${(props) => props.theme.colors.white};
  }
`;
export const PagBtnList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
`;

export const PagBtn = styled.button`
  height: 40px;
  width: 40px;
  background: ${(props) => props.theme.colors.snow};
  border: 1px solid #e5e5e5;
  font-size: ${(props) => props.theme.sizes.medium};
  font-family: ${(props) => props.theme.fonts.main};
  border-radius: 4px;
  cursor: pointer;
`;

export const ArrowBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
