import styled from "styled-components";

export const StackContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StackTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StackContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  @media ${({ theme }) => theme.mobile} {
    font-size: 2.5rem;
  }
`;
