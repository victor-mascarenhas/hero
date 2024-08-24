import styled from "styled-components";

export const PagWrapper = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
  .pagination__item--active {
    background: #167abc 0% 0% no-repeat padding-box;
    border: 1px solid #167abc;
    letter-spacing: 0px;
    color: #ffffff;
  }

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
  .skeleton-avatar {
    height: 40px;
    width: 40px;
    border-radius: 4px;
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
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  font-family: "PT Sans";
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
