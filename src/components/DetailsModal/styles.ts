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
