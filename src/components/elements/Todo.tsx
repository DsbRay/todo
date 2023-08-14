import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { useTheme } from '../../utils/context/ThemeContext'
import closeIcon from '../../images/icon-cross.svg'
import checkIcon from '../../images/icon-check.svg'

interface TodoProps {
  todo: any
  index: number
  handleDeleteTodo: (e: any) => void
  handleCompleteToggle: (e: any) => void
}

const Todo: React.FC<TodoProps> = ({ todo, index, handleDeleteTodo, handleCompleteToggle }) => {
  const { theme } = useTheme()
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided: any) => (
        <TodoContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} theme={theme}>
          <Circle theme={theme} onClick={() => handleCompleteToggle(todo)} className={todo.complete ? 'complete' : ''}>
            <div className='outer'>
              <div className='inner'>{todo.complete && <img src={checkIcon} />}</div>
            </div>
          </Circle>
          <p>{todo.title}</p>
          <Delete onClick={() => handleDeleteTodo(todo)}>
            <img src={closeIcon} />
          </Delete>
        </TodoContainer>
      )}
    </Draggable>
  )
}
const Delete = styled.div`
  margin: 0 auto;
  opacity: 0;
  transition: opacity 0.25s ease;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  img {
    width: auto;
    transition: transform 0.25s ease;
  }
`
const TodoContainer = styled.div`
  background-color: ${(props) => props.theme.colors.todo};
  height: 50px;
  padding: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.circle};
  display: grid;
  grid-template-columns: 50px auto 50px;
  align-items: center;
  &:hover ${Delete} {
    opacity: 1;
  }
`
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.complete {
    .outer {
      background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
      .inner {
        background-color: transparent;
        img {
          opacity: 1;
        }
      }
    }
  }
  .outer {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.colors.circle};
    position: relative;
    .inner {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.todo};
      height: 26px;
      width: 26px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 12px;
        height: auto;
        opacity: 0;
      }
    }
  }
  &:hover {
    .outer {
      background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    }
  }
`

export default Todo
