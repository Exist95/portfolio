import React, { useEffect } from "react";
import * as S from "./style";
import AOS from "aos";

const Stack = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <S.StackContainer data-aos="fade-up-left" data-aos-easing="ease-out-cubic">
      <S.StackTitle>[Skill]</S.StackTitle>
      <S.StackContents>
        <div>Javascript, React, Recoil,</div>
        <div> Styled-components, </div>
        <div>Redux, HTML, CSS</div>
      </S.StackContents>
    </S.StackContainer>
  );
};

export default Stack;
