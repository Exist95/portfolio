import React from "react";
import * as S from "./style";
const Stack = () => {
  return (
    <S.StackContainer>
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
