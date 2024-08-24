import * as S from "./styles";

const MinorSkeletonList = () => {
  const Arr = Array.from({ length: 3 });
  return (
    <S.MinorList>
      {Arr.map((_, i) => (
        <li key={i}>
          <div className="skeleton skeleton-text"></div>
        </li>
      ))}
    </S.MinorList>
  );
};

const SkeletonList = () => {
  const Arr = Array.from({ length: 10 });
  return (
    <S.Wrapper>
      <S.Titles>
        <p>Personagem</p>
        <p>Séries</p>
        <p>Eventos</p>
      </S.Titles>
      <S.List>
        {Arr.map((_, i) => (
          <S.SkeletonRow key={i}>
            <S.SkeletonChar>
              <div className="skeleton skeleton-avatar"></div>
              <div className="skeleton skeleton-text"></div>
            </S.SkeletonChar>
            <MinorSkeletonList />
            <MinorSkeletonList />
          </S.SkeletonRow>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default SkeletonList;
