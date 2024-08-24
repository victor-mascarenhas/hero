import { useState } from "react";
import { ArrowBtn } from "../Nav/styles";
import LeftIcon from "../../assets/icons8-voltar-64.png";
import RightIcon from "../../assets/icons8-avançar-64.png";

import * as S from "./styles";

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
      <S.Wrapper>
        <img
          src={content[currentIndex]?.src}
          alt={content[currentIndex]?.title}
        />
        <h3>{content[currentIndex]?.title}</h3>
      </S.Wrapper>
      <S.BtnWrapper>
        <ArrowBtn onClick={prevImage}>
          <img src={LeftIcon} height={40} width={40} />
        </ArrowBtn>
        <ArrowBtn onClick={nextImage}>
          <img src={RightIcon} height={40} width={40} />
        </ArrowBtn>
      </S.BtnWrapper>
    </>
  );
};

export default Carousel;
