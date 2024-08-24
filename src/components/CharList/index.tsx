import { Character } from "../../hooks/useCharacter/types";
import * as S from "./styles";
import useResize from "../../hooks/useResize";
import { MinorList } from "./MinorList";
import { useContext } from "react";
import { CharacterContext } from "../../state/context";
import { SkeletonList } from "../Skeleton";

const CharList = ({
  list,
  handleClick,
}: {
  list: Character[];
  handleClick: (arg: number) => void;
}) => {
  const state = useContext(CharacterContext);
  const { isLoading } = state.loading;
  const { isMobile } = useResize();

  return (
    <S.Wrapper>
      <S.Titles>
        <p>Personagem</p>
        {!isMobile && (
          <>
            <p>Séries</p>
            <p>Eventos</p>
          </>
        )}
      </S.Titles>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <S.List>
          {list.map((item, i) => (
            <S.ListRow key={item.name + i} onClick={() => handleClick(item.id)}>
              <S.CharInfo>
                {
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    height="48px"
                    width="48px"
                  />
                }
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
      )}
    </S.Wrapper>
  );
};
export default CharList;
