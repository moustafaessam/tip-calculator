import styled from "styled-components";

export const StyledMain = styled.form`
  max-width: 92rem;
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  gap: 4.8rem;

  @media (max-width: 768px) {
    & {
      flex-grow: 1;
      max-width: auto;
      flex-direction: column;
      gap: 3.2rem;
    }
  }
`;
