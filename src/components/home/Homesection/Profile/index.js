import React, { useEffect } from "react";
import * as S from "./style";
import AOS from "aos";

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <S.StackContainer
      data-aos="flip-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
    >
      <S.StackContents src="/images/Pic.jpg" alt="profile" />
    </S.StackContainer>
  );
};

export default Profile;
