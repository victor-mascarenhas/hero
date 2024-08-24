import styled from "styled-components";

const BaseSkeleton = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  &::before {
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
`;

export const SquareSkeleton = styled(BaseSkeleton)`
  height: 48px;
  width: 48px;
`;
export const LineSkeleton = styled(BaseSkeleton)`
  height: 20px;
  width: 60%;
`;
export const RectangularSkeleton = styled(BaseSkeleton)`
  width: 150px;
  height: 200px;
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 200px;
  height: 280px;
  gap: 4px;
`;
export const BtnWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
`;
