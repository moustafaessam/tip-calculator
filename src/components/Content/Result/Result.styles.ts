import styled from "styled-components";

export const StyledResult = styled.section`
  min-width: 41.3rem;
  width: 100%;
  background-color: #00474b;
  border-radius: 1.5rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 420px) {
    min-width: auto;
    width: auto;
    padding: 3.7rem 2.2rem 2.4rem 2.4rem;
  }
`;
