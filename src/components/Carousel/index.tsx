import { useState } from "react";
import styled from "styled-components";
import { ArrowBtn } from "../Nav/styles";
import LeftIcon from "../../assets/icons8-voltar-64.png";
import RightIcon from "../../assets/icons8-avançar-64.png";

export type ContentType = {
  title: string;
  src: string;
};

const Carousel = ({ content }: { content: ContentType[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % content.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + content.length) % content.length);
  };

  return (
    <>
      <Wrapper>
        <img
          src={content[currentIndex]?.src}
          alt={content[currentIndex]?.title}
        />
        <h3>{content[currentIndex]?.title}</h3>
      </Wrapper>
      <BtnWrapper>
        <ArrowBtn onClick={prevImage}>
          <img src={LeftIcon} height={40} width={40} />
        </ArrowBtn>
        <ArrowBtn onClick={nextImage}>
          <img src={RightIcon} height={40} width={40} />
        </ArrowBtn>
      </BtnWrapper>
    </>
  );
};

export default Carousel;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 200px;
  height: 280px;
  img {
    width: 150px;
    height: 200px;
  }
  h3 {
    text-align: center;
    font-size: 16px;
    font-family: PT Sans;
    color: #555555;
  }
  @media (max-width: 768px) {
  }
`;
const BtnWrapper = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
