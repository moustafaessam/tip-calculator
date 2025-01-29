import styled from "styled-components";

export const StyledForm = styled.section`
  min-width: 41.3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 420px) {
    & {
      gap: 3.2rem;
    }
  }
`;
