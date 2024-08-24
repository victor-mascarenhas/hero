import styled from "styled-components";

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 24px;
  p {
    text-align: start;
    width: 33%;
    font-family: PT Sans;
    font-size: 12px;
    color: #8e8e8e;
  }
  @media (max-width: 768px) {
    padding: 9px 96px;
    p {
      width: 100%;
    }
  }
`;

export const ListMinor = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 33%;
  font-family: PT Sans;
  font-size: 14px;
  text-align: start;
  color: #555555;
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
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 21px 24px;
  @media (max-width: 768px) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const CharInfo = styled.div`
  width: 33%;
  display: flex;
  gap: 24px;
  justify-content: start;
  align-items: center;
  color: #555555;

  img {
    border-radius: 4px;
  }
  h3 {
    font-size: 16px;
    font-weight: 700;
    font-family: PT Sans;
  }
  @media (max-width: 768px) {
    width: 100%;
    h3 {
      font-size: 14px;
    }
  }
`;

export const Container = styled.div`
  max-height: 100%;
`;
