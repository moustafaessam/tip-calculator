import styled from "styled-components";

export const StyledInputContainer = styled.div`
  height: 4.8rem;
  width: 100%;
  background-color: #f3f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  text-align: right;
  border: none;
  font-size: 2.4rem;
  outline: none;
  background-color: inherit;
  max-width: 8.9rem;
  color: #7f9d9f;
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
  &::placeholder {
    color: #7f9d9f;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
