import styled from "styled-components";

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StackTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
`;

export const StackContents = styled.img`
  width: 100%;
  height: 20rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  @media ${({ theme }) => theme.mobile} {
    font-size: 2.5rem;
  }
`;
