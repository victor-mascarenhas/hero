import styled from "styled-components";
import Logo from "../../assets/logoObjective.svg";

const Header = () => {
  return (
    <HeaderBg>
      <ObjIcon src={Logo} />
      <Candidato>
        <h2>Nome do candidato</h2>
        <p>Teste de Front-end</p>
        <div>cb</div>
      </Candidato>
    </HeaderBg>
  );
};

export default Header;

const HeaderBg = styled.header`
  height: 64px;
  background: #ffffff 0% 0% no-repeat padding-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 21px 24px 19px 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const Candidato = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    font-size: 14px;
    text-align: left;
  }
`;

const ObjIcon = styled.img`
  height: 24px;
`;
