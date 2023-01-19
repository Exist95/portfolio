import styled from "styled-components";

export const ProjectHeading = styled.h2`
  display: flex;
  justify-content: center;
  padding: 7rem 1.5rem 0rem 1.5rem;
  font-size: 5rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 5rem;
  }
  @media ${({ theme }) => theme.tablet} {
    font-size: 4rem;
  }
  @media ${({ theme }) => theme.mobile} {
    padding: 7rem 1.5rem 1rem 1.5rem;
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.phone} {
    padding: 7rem 1.5rem 1rem 1.5rem;
  }
`;

export const ProjectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40rem);
  grid-template-rows: 20rem;
  width: 100%;
  padding: 4rem 20rem 5rem 20rem;
  align-items: center;
  justify-content: center;
  row-gap: 3rem;
  column-gap: 3rem;
  @media ${({ theme }) => theme.phone} {
    padding: 0rem 1.5rem 1rem 1.5rem;
    flex-direction: column;
    display: flex;
  }
`;
