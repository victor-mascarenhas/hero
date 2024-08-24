import styled from "styled-components";

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 24px;
  p {
    text-align: start;
    width: 33%;
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 12px;
    color: ${(props) => props.theme.colors.smoke};
  }
  @media (max-width: 768px) {
    padding: 9px 96px;
    p {
      width: 100%;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  height: fit-content;
  overflow-x: auto;
`;

export const ListRow = styled.div`
  height: 88px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 21px 24px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.darkSmoke};
  }
`;

export const CharInfo = styled.div`
  width: 33%;
  display: flex;
  gap: 24px;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.darkSmoke};

  img {
    border-radius: 4px;
  }
  h3 {
    font-size: ${(props) => props.theme.sizes.large};
    font-weight: ${(props) => props.theme.weight.bold};
    font-family: ${(props) => props.theme.fonts.main};
  }
  @media (max-width: 768px) {
    width: 100%;
    h3 {
      font-size: 14px;
    }
  }
`;

export const Wrapper = styled.div`
  max-height: 100%;
`;
