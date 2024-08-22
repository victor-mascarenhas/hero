import styled from "styled-components";
import Pagination from "./components/Pagination";
import GlobalStyle from "./styles/GlobalStyle";
import { useContext, useEffect } from "react";
import { CharacterContext } from "./state/context";
import { usePagination } from "./hooks/usePagination";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const state = useContext(CharacterContext);
  const { pages, current, array, onPageChange, offset } = usePagination();
  const { getData } = useFetchData();
  useEffect(
    () => () => {
      getData();
    },
    [offset]
  );
  return (
    <>
      <GlobalStyle />
      <Bg>
        <div>
          {state?.loading.isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {state?.charList.data.map((item, i) => (
                <li key={i}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
              <Pagination
                onPageChange={onPageChange}
                current={current}
                array={array}
                pages={pages}
              />
            </>
          )}
        </div>
      </Bg>
    </>
  );
}

export default App;

const Bg = styled.div`
  background-color: salmon;
  color: black;
  width: 100vw;
  height: 100vh;
`;
