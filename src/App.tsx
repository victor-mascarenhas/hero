import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "./state/context";
import { useFetchData } from "./hooks/useFetchData";
import CharList from "./components/CharList";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer";
import DetailsModal from "./components/DetailsModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const state = useContext(CharacterContext);
  const { offset } = state.pagination;
  const { charList, onChangeSelectedChar, onUpdateSelectedCharResources } =
    state.charData;
  const { getCharData, getOtherResource } = useFetchData();

  const handleSingleCharDetails = (id: number) => {
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
    return (() => {
      getCharData();
    })();
  }, [offset, getCharData]);
  return (
    <>
      <Header />
      {showModal && <DetailsModal closeModal={handleCloseModal} />}
      <ExternalWrapper>
        <Content>
          <SearchInput />
          <CharList list={charList} handleClick={handleSingleCharDetails} />
        </Content>
      </ExternalWrapper>
      <Footer />
    </>
  );
}

export default App;

const Content = styled.div`
  padding: 64px 8% 24px 8%;
  background-color: #e5e5e5;
  min-height: 100%;
`;

const ExternalWrapper = styled.div`
  height: calc(100vh - 90px);
`;
