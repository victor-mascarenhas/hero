import searchIcon from "../../assets/searchIcon.svg";
import { useState } from "react";
import { useFetchData } from "../../hooks/useFetchData";

import * as S from "./styles";

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
    <S.Container>
      <S.Title>Busca de personagens</S.Title>
      <S.SubTitle>Nome do personagem</S.SubTitle>
      <S.InputContainer>
        <img src={searchIcon} alt="Ícone de Busca" />
        <form onSubmit={submitSearch}>
          <S.StyledInput
            value={textInput}
            onChange={inputHandler}
            type="text"
            placeholder="Search"
          />
        </form>
      </S.InputContainer>
    </S.Container>
  );
};

export default SearchInput;
