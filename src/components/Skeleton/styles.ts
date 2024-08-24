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
`;

export const Wrapper = styled.div`
  max-height: 100%;

  .skeleton {
    background-color: #e0e0e0;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .skeleton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .skeleton-text {
    height: 20px;
    width: 60%;
  }

  .skeleton-avatar {
    height: 48px;
    width: 48px;
    border-radius: 4px;
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
export const SkeletonRow = styled.li`
  height: 88px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 21px 24px;
`;

export const SkeletonChar = styled.div`
  display: flex;
  width: 33%;
  justify-content: start;
  align-items: center;
  gap: 24px;
`;

export const MinorList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 33%;
  gap: 4px;
  li {
    width: 50%;
  }
`;
