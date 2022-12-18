import styled from "styled-components";

export const TextFooter = styled.div`
  display: flex;
  bottom: 0;
  right: 0;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  font-size: 4rem;
  font-weight: 900;
  @media ${({ theme }) => theme.laptop} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 2rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.mobile} {
    font-size: 1rem;
  }
`;
