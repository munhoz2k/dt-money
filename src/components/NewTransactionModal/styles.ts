import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  padding: 2.5rem 3rem;

  border-radius: 6px;
  background: ${(props) => props.theme['gray-800']};
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-top: 2rem;

  input {
    border: 0;
    border-radius: 6px;

    padding: 1rem;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button[type='submit'] {
    margin-top: 1.5rem;
    height: 58px;
    padding: 0 1.5rem;

    border: 0;
    border-radius: 6px;

    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
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

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  background: transparent;
  color: ${(props) => props.theme['gray-500']};

  cursor: pointer;
  border: 0;
  line-height: 0;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
  margin-top: 1.5rem;
`

interface TransactionTypeButton {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButton>`
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  gap: 1.5rem;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background-color 0.3s;
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
