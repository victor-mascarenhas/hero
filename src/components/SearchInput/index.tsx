import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";
import { useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";

const SearchInput = () => {
  const [textInput, setTextInput] = useState("");
  const { getData } = useFetchData();
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    getData(textInput);
    setTextInput("");
  };
  return (
    <Container>
      <Title>Busca de personagens</Title>
      <SubTitle>Nome do personagem</SubTitle>
      <InputContainer>
        <img src={searchIcon} alt="Ícone de Busca" />
        <form onSubmit={submitSearch}>
          <StyledInput
            value={textInput}
            onChange={inputHandler}
            type="text"
            placeholder="Search"
          />
        </form>
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
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
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
  @media (max-width: 768px) {
    img {
      left: calc(100% - 45px);
    }
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;
