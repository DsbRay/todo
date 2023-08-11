import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/context/ThemeContext'

interface Props {}

const AddTodo: React.FC<Props> = ({}) => {
  const { theme } = useTheme()

  return (
    <InputContainer theme={theme}>
      <Circle theme={theme}>
        <div />
      </Circle>
      <input placeholder='Create a Todo...' type='text' />
    </InputContainer>
  )
}

const InputContainer = styled.div`
  position: absolute;
  bottom: 75px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  height: 65px;
  background-color: ${(props) => props.theme.colors.todo};
  margin: 0 auto;
  grid-template-columns: 50px auto;
  border-radius: 5px;
  width: 90%;
  input {
    border-radius: 0 5px 5px 0;
    outline: none;
    border: none;
    padding: 12px 5px 5px 5px;
    font-size: 1.2rem;
    background-color: transparent;
    color: ${(props) => props.theme.colors.todoText};
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 33vw;
  }
`

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    height: 25px;
    width: 25px;
    border: 2px solid ${(props) => props.theme.colors.circle};
    border-radius: 100%;
  }
`
export default AddTodo
