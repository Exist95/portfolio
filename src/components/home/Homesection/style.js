import styled from "styled-components";

export const HomeSectionContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const HomeSectionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 4.5rem;
  font-weight: 800;
  font-style: normal;
  border: 5px solid black;
  width: 60rem;
  height: 60rem;
  padding: 15px;
  position: relative;

  @media ${({ theme }) => theme.laptop} {
    font-size: 4rem;
    width: 55rem;
    height: 55rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 3.5rem;
    width: 50rem;
    height: 50rem;
  }
  @media ${({ theme }) => theme.mobile} {
    font-size: 3rem;
    width: 40rem;
    height: 40rem;
  }
`;

export const HomeSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeSectionIcon = styled.div`
  display: flex;
  gap: 3rem;
  position: absolute;
  bottom: 0;
`;

export const CommonDataBox = styled.div`
  > a {
    color: black;
  }
  &:hover {
    color: white;
    cursor: pointer;
  }
  & > a:hover {
    color: white;
  }
`;
