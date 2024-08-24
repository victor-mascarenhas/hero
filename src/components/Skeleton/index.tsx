import * as S from "./styles";

const MinorSkeletonList = () => {
  const Arr = Array.from({ length: 3 });
  return (
    <S.MinorList>
      {Arr.map((_, i) => (
        <li key={i}>
          <S.LineSkeleton />
        </li>
      ))}
    </S.MinorList>
  );
};

export const SkeletonList = () => {
  const Arr = Array.from({ length: 10 });
  return (
    <S.List>
      {Arr.map((_, i) => (
        <S.SkeletonRow key={i}>
          <S.SkeletonChar>
            <S.SquareSkeleton />
            <S.LineSkeleton />
          </S.SkeletonChar>
          <MinorSkeletonList />
          <MinorSkeletonList />
        </S.SkeletonRow>
      ))}
    </S.List>
  );
};

export const SkeletonCarousel = () => {
  return (
    <>
      <S.Wrapper>
        <S.RectangularSkeleton />
        <S.LineSkeleton />
      </S.Wrapper>
      <S.BtnWrapper>
        <S.SquareSkeleton />
        <S.SquareSkeleton />
      </S.BtnWrapper>
    </>
  );
};
