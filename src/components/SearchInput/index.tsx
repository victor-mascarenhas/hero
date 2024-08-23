import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";

const SearchInput = () => {
  return (
    <Container>
      <Title>Busca de personagens</Title>
      <SubTitle>Nome do personagem</SubTitle>
      <InputContainer>
        <img src={searchIcon} alt="Ícone de Busca" className="search-icon" />
        <StyledInput placeholder="Search" />
      </InputContainer>
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  color: #555555;
  font-weight: 700;
  font-family: PT Sans Caption;
  text-align: start;
  margin: 40px 0px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;
const SubTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
`;

const InputContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    left: 260px;
    top: 6px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
`;

const StyledInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 295px;
  height: 32px;
  font-family: PT Sans;
  font-style: italic;
  padding: 17px;
  &:focus {
    outline: none;
  }
`;
