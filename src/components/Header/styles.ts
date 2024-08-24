import styled from "styled-components";

export const HeaderBg = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.colors.white};
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
  color: ${(props) => props.theme.colors.darkSmoke};
  font-family: ${(props) => props.theme.fonts.secondary};
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
    font-weight: ${(props) => props.theme.weight.bold};
    font-size: ${(props) => props.theme.sizes.medium};
  }
  p {
    font-size: ${(props) => props.theme.sizes.medium};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    h2 {
      font-size: ${(props) => props.theme.sizes.small};
    }
    p {
      font-size: ${(props) => props.theme.sizes.small};
    }
  }
`;

export const CB = styled.div`
  display: flex;
  align-self: center;
  background: ${(props) => props.theme.colors.snow};
  border-radius: 4px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.weight.bold};
  &:hover {
    background-color: ${(props) => props.theme.colors.darkSmoke};
    color: ${(props) => props.theme.colors.snow};
  }
`;
