import styled from "styled-components";

export const HeaderBg = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding: 21px 24px 19px 24px;
  height: 64px;
  width: 100%;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 21px 8% 19px 8%;
  }
`;
export const Candidate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  color: #555555;
  font-family: "PT Sans Caption";
  align-items: center;
  justify-content: center;
`;

export const ObjIcon = styled.img`
  height: 24px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  h2 {
    text-align: left;
    font-weight: 700;
    font-size: 14px;
  }
  p {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const CB = styled.div`
  display: flex;
  align-self: center;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 4px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &:hover {
    background-color: #555555;
    color: #f5f5f5;
  }
`;
