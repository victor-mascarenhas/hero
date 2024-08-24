import styled from "styled-components";

export const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

export const Detail = styled.div`
  width: fit-content;
  max-width: 800px;
  border-radius: 1rem;
  padding: 4rem 4rem;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  height: fit-content;
  @media (max-width: 768px) {
    top: 100%;
    width: 100%;
    padding: 4rem 2rem;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  h2 {
    font-family: ${(props) => props.theme.fonts.main};
    color: ${(props) => props.theme.colors.darkSmoke};
    margin-bottom: 14px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const CarouselSection = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.colors.darkSmoke};
  margin-bottom: 24px;
  img {
    margin-right: 24px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    text-align: center;
    img {
      margin-bottom: 24px;
      height: 100px;
      width: 100px;
    }
    align-items: center;
    flex-direction: column;
    margin-bottom: 48px;
  }
`;

export const CloseSection = styled.div`
  height: 20px;
  width: 100%;
  img {
    height: 40px;
    width: 40px;
    float: right;
    cursor: pointer;
  }
`;
