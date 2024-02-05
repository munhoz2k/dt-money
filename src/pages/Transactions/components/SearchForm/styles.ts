import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border: 0;
    border-radius: 6px;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;

    gap: 0.75rem;
    padding: 1rem;

    border: 0;
    border-radius: 6px;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.3s;
    }
  }
`
