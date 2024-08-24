import Logo from "../../assets/logoObjective.svg";

import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderBg>
      <S.ObjIcon src={Logo} />
      <S.Candidate>
        <S.NameWrapper>
          <h2>Victor Mascarenhas</h2>
          <p>Teste de Front-end</p>
        </S.NameWrapper>
        <S.CB>CB</S.CB>
      </S.Candidate>
    </S.HeaderBg>
  );
};

export default Header;
