import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { useContext, useEffect, useRef, useState } from "react";
import { CharacterContext } from "./state/context";
import { useFetchData } from "./hooks/useFetchData";
import CharList from "./components/CharList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer";
import SkeletonList from "./components/Skeleton";
import DetailsModal from "./components/DetailsModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const state = useContext(CharacterContext);
  const { offset } = state.pagination;
  const { charList, onChangeSelectedChar, onUpdateSelectedCharResources } =
    state.charData;
  const { getCharData, getOtherResource } = useFetchData();
  const isFirstRun = useRef(true);

  const handleClick = (id: number) => {
    const [selectedChar] = charList.filter((char) => char.id === id);
    onChangeSelectedChar(selectedChar);
    getOtherResource({ charId: id, resource: "comics" });
    getOtherResource({ charId: id, resource: "events" });
    getOtherResource({ charId: id, resource: "series" });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    onChangeSelectedChar(null);
    onUpdateSelectedCharResources(null);
    setShowModal(false);
  };

  useEffect(() => {
    if (!isFirstRun.current) {
      (() => {
        getCharData();
      })();
    }
    isFirstRun.current = false;
  }, [offset, getCharData]);
  return (
    <>
      <GlobalStyle />
      <Main>
        <Header />
        {showModal && <DetailsModal closeModal={handleCloseModal} />}
        <Content>
          <ExternalWrapper>
            <SearchInput />
            {state?.loading.isLoading ? (
              <SkeletonList />
            ) : (
              <>
                <CharList list={charList} handleClick={handleClick} />
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
