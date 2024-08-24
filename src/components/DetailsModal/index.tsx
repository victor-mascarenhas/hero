import { useContext } from "react";
import * as S from "./styles";
import { CharacterContext } from "../../state/context";
import Carousel, { ContentType } from "../Carousel";
import { OtherResource } from "../../hooks/useCharacter/types";
import { SkeletonCarousel } from "../Skeleton";
import CloseIcon from "../../assets/icons8-excluir-30.png";

const DetailsModal = ({ closeModal }: { closeModal: () => void }) => {
  const state = useContext(CharacterContext);
  const { selectedChar, selectedCharResources } = state.charData;
  const { isLoading } = state.loading;

  const parseCarousel = (items: OtherResource[]) => {
    return items.map((item) => {
      const parseObj: ContentType = {
        title: item.title,
        src: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
      };

      return parseObj;
    });
  };
  return (
    <>
      <S.CardShadow>
        <S.Detail>
          <S.CloseSection>
            <img src={CloseIcon} onClick={closeModal} />
          </S.CloseSection>
          <S.Info>
            <img
              src={`${selectedChar?.thumbnail.path}.${selectedChar?.thumbnail.extension}`}
              height={70}
              width={70}
            />
            <div>
              <h1>{selectedChar?.name}</h1>
              <p>{selectedChar?.description}</p>
            </div>
          </S.Info>
          <S.CarouselWrapper>
            <S.CarouselSection>
              <h2>Comics</h2>
              {!isLoading && selectedCharResources?.comics ? (
                <Carousel
                  content={parseCarousel(selectedCharResources.comics)}
                />
              ) : (
                <SkeletonCarousel />
              )}
            </S.CarouselSection>
            <S.CarouselSection>
              <h2>Events</h2>
              {!isLoading && selectedCharResources?.events ? (
                <Carousel
                  content={parseCarousel(selectedCharResources.events)}
                />
              ) : (
                <SkeletonCarousel />
              )}
            </S.CarouselSection>
            <S.CarouselSection>
              <h2>Series</h2>
              {!isLoading && selectedCharResources?.series ? (
                <Carousel
                  content={parseCarousel(selectedCharResources.series)}
                />
              ) : (
                <SkeletonCarousel />
              )}
            </S.CarouselSection>
          </S.CarouselWrapper>
        </S.Detail>
      </S.CardShadow>
    </>
  );
};

export default DetailsModal;
