// src/components/TodoList.js
import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Todo from '../elements/Todo'
import { useTheme } from '../../utils/context/ThemeContext'
import FilterOptions from '../elements/FilterOptions'
import styled from 'styled-components'

interface TodoProps {
  todos: any
  onDragEnd: (result: any) => void
}

const TodoList: React.FC<TodoProps> = ({ todos, onDragEnd }) => {
  const { theme } = useTheme()

  return (
    <ListContainer theme={theme}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todoList'>
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo: any, index: number) => (
                <Todo todo={todo} index={index} key={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <FilterOptions />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  position: relative;
  top: -50px;
  padding: 5px 0;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.todo};
  width: 90vw;
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 33vw;
  }
`
export default TodoList
