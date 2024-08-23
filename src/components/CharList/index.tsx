import styled from "styled-components";
import { Character, ResourceList } from "../../hooks/useCharacter/types";

const MinorList = ({ itemList }: { itemList: ResourceList }) => {
  const slice = itemList.items.slice(0, 3);
  return (
    <ListMinor>
      {slice.map((item, i) => (
        <li key={item.name + i}>
          <p>{item.name}</p>
        </li>
      ))}
    </ListMinor>
  );
};

const CharList = ({ list }: { list: Character[] }) => {
  return (
    <Container>
      <Titles>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </Titles>
      <List>
        {list.map((item, i) => (
          <ListRow key={item.name + i}>
            <CharInfo>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                height="48px"
                width="48px"
              />
              <h3>{item.name}</h3>
            </CharInfo>
            <MinorList itemList={item.series} />
            <MinorList itemList={item.events} />
          </ListRow>
        ))}
      </List>
    </Container>
  );
};
export default CharList;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9px 24px;
  p {
    text-align: start;
    width: 33%;
    font-family: PT Sans;
    font-size: 12px;
    color: #8e8e8e;
  }
`;

const ListMinor = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 33%;
  font-family: PT Sans;
  font-size: 14px;
  text-align: start;
  color: #555555;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  height: fit-content;
  overflow-x: auto;
`;

const ListRow = styled.div`
  height: 88px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000033;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 21px 24px;
`;

const CharInfo = styled.div`
  width: 33%;
  display: flex;
  gap: 24px;
  justify-content: start;
  align-items: center;
  color: #555555;
  font-size: 16px;
  font-weight: 700;
  font-family: PT Sans;
  img {
    border-radius: 4px;
  }
`;

const Container = styled.div`
  max-height: 100%;
`;
