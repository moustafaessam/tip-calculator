import styled from "styled-components";

export const StyledForm = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 420px) {
    & {
      gap: 3.2rem;
    }
  }
`;
