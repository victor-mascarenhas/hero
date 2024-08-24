import { Character, ResourceList } from "../../hooks/useCharacter/types";
import * as S from "./styles";
import useResize from "../../hooks/useResize";

const MinorList = ({ itemList }: { itemList: ResourceList }) => {
  const slice = itemList.items.slice(0, 3);
  return (
    <S.ListMinor>
      {slice.map((item, i) => (
        <li key={item.name + i}>
          <p>{item.name}</p>
        </li>
      ))}
    </S.ListMinor>
  );
};

const CharList = ({
  list,
  handleClick,
}: {
  list: Character[];
  handleClick: (arg: number) => void;
}) => {
  const { isMobile } = useResize();

  return (
    <S.Container>
      <S.Titles>
        <p>Personagem</p>
        {!isMobile && (
          <>
            <p>Séries</p>
            <p>Eventos</p>
          </>
        )}
      </S.Titles>
      <S.List>
        {list.map((item, i) => (
          <S.ListRow key={item.name + i} onClick={() => handleClick(item.id)}>
            <S.CharInfo>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                height="48px"
                width="48px"
              />
              <h3>{item.name}</h3>
            </S.CharInfo>
            {!isMobile && (
              <>
                <MinorList itemList={item.series} />
                <MinorList itemList={item.events} />
              </>
            )}
          </S.ListRow>
        ))}
      </S.List>
    </S.Container>
  );
};
export default CharList;
