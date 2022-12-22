import React from "react";
import styled from "styled-components";
import SectionWrapper from "../global/SectionWrapper";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSection = () => {
  const item = [
    { id: 1, project: "paldo", url: "images/paldo.png" },
    { id: 2, project: "bokmango", url: "images/bokmango.png" },
    { id: 3, project: "portfolio", url: "/images/paldo.png" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <SectionWrapper id="project">
      <ProjectBackground>
        <Contain>
          <StyledSlider {...settings}>
            {item.map((item) => {
              return (
                <ItemBox key={item.id}>
                  <ImageContainer>
                    <Image src={item.url} alt="이미지" />
                    <Nametag>Detail</Nametag>
                  </ImageContainer>
                </ItemBox>
              );
            })}
          </StyledSlider>
        </Contain>
      </ProjectBackground>
    </SectionWrapper>
  );
};

const ProjectBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e6e6fa;
`;

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  font-size: 6rem;
  font-weight: 800;
  font-style: normal;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30rem;
`;

const ImageContainer = styled.div`
  margin: 0 16px;
  width: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  background-size: cover;
  margin: 0 auto;
`;

const ItemBox = styled.div`
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Nametag = styled.button`
  font-size: 2rem;
  margin-top: 1rem;
  display: flex;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

const ProjectHead = styled.h2`
  font-size: 9rem;
  font-weight: 900;

  @media ${({ theme }) => theme.laptop} {
    font-size: 9rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 6rem;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    font-size: 4rem;
  }

  @media ${({ theme }) => theme.phone} {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
  }
`;

export default ProjectSection;
