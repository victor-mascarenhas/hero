import styled from "styled-components";
import Pagination from "./components/Pagination";
import GlobalStyle from "./styles/GlobalStyle";
import { useContext, useEffect } from "react";
import { CharacterContext } from "./state/context";
import { usePagination } from "./hooks/usePagination";

function App() {
  const state = useContext(CharacterContext);
  const { pages, current, array } = usePagination();
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <GlobalStyle />
      <Bg>
        <div>
          {state?.isLoading && <p>Loading...</p>}
          {state.data &&
            state?.data.map((item, i) => (
              <li key={i}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
        </div>
        <Pagination
          onPageChange={state.pagination.onPageChange!}
          current={current}
          array={array}
          pages={pages}
        />
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
