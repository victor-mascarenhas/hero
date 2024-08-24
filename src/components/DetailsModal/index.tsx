import { useContext } from "react";
import * as S from "./styles";
import { CharacterContext } from "../../state/context";
import Carousel, { ContentType } from "../Carousel";
import { OtherResource } from "../../hooks/useCharacter/types";
import styled from "styled-components";

const DetailsModal = ({ closeModal }: { closeModal: () => void }) => {
  const state = useContext(CharacterContext);
  const { selectedChar, selectedCharResources } = state.charData;

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
          <CloseSection>
            <div onClick={closeModal} />
          </CloseSection>
          <Info>
            <img
              src={`${selectedChar?.thumbnail.path}.${selectedChar?.thumbnail.extension}`}
              height={70}
              width={70}
            />
            <div>
              <h1>{selectedChar?.name}</h1>
              <p>{selectedChar?.description}</p>
            </div>
          </Info>
          <CarouselWrapper>
            <ContentWrapper>
              <h2>Comics</h2>
              {selectedCharResources?.comics && (
                <Carousel
                  content={parseCarousel(selectedCharResources.comics)}
                />
              )}
            </ContentWrapper>
            <ContentWrapper>
              <h2>Events</h2>
              {selectedCharResources?.events && (
                <Carousel
                  content={parseCarousel(selectedCharResources.events)}
                />
              )}
            </ContentWrapper>
            <ContentWrapper>
              <h2>Series</h2>
              {selectedCharResources?.series && (
                <Carousel
                  content={parseCarousel(selectedCharResources.series)}
                />
              )}
            </ContentWrapper>
          </CarouselWrapper>
        </S.Detail>
      </S.CardShadow>
    </>
  );
};

export default DetailsModal;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  h2 {
    font-family: PT Sans;
    color: #555555;
    margin-bottom: 14px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  font-family: PT Sans;
  color: #555555;
  margin-bottom: 24px;
  img {
    margin-right: 24px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    text-align: center;
    img {
      margin-bottom: 24px;
      height: 100px;
      width: 100px;
    }
    align-items: center;
    flex-direction: column;
    margin-bottom: 48px;
  }
`;

const CloseSection = styled.div`
  height: 20px;
  width: 100%;
  div {
    height: 20px;
    width: 20px;
    background-color: red;
    float: right;
    cursor: pointer;
  }
`;
