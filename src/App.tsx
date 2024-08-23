import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { useContext, useEffect } from "react";
import { CharacterContext } from "./state/context";
import { useFetchData } from "./hooks/useFetchData";
import CharList from "./components/CharList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer";
import SkeletonList from "./components/Skeleton";

function App() {
  const state = useContext(CharacterContext);
  const { offset } = state.pagination;
  const { getData } = useFetchData();
  const data = state?.charList.data;

  useEffect(
    () => () => {
      getData();
    },
    [offset]
  );
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        <Content>
          <ExternalWrapper>
            <SearchInput />
            {state?.loading.isLoading ? (
              <SkeletonList />
            ) : (
              <>
                <CharList list={data} />
              </>
            )}
          </ExternalWrapper>
        </Content>
        <Footer />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  color: black;
  max-width: 100vw;
  width: 100vw;
  height: auto;
`;

const ExternalWrapper = styled.div`
  padding: 64px 8% 24px 8%;
  background-color: #e5e5e5;
  min-height: 100%;
`;

const Content = styled.div`
  height: calc(100vh - 90px);
`;
