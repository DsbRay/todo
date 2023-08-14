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
  deleteTodo: (todo: any) => void
  completeToggle: (todo: any) => void
  filterTodos: (filter: string) => void
  clearCompleted: () => any
  filterType: string
}

const TodoList: React.FC<TodoProps> = ({
  todos,
  onDragEnd,
  deleteTodo,
  completeToggle,
  filterTodos,
  filterType,
  clearCompleted,
}) => {
  const { theme } = useTheme()
  const handleDeleteTodo = (todoItem: any) => deleteTodo(todoItem)
  const handleCompleteToggle = (todoItem: any) => completeToggle(todoItem)
  const handleFilterTodos = (filter: any) => filterTodos(filter)
  const incompleteTodosCount = todos.filter((todo: any) => !todo.complete).length
  return (
    <ListContainer theme={theme}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todoList'>
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo: any, index: number) => (
                <Todo
                  todo={todo}
                  index={index}
                  key={index}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCompleteToggle={handleCompleteToggle}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <FilterOptions
        incompleteTodosCount={incompleteTodosCount}
        handleFilterTodos={handleFilterTodos}
        filterType={filterType}
        handleClear={clearCompleted}
      />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  position: relative;
  padding: 5px 0;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.todo};
  width: 90vw;
  @media (min-width: 768px) {
    width: 50vw;
    top: -50px;
  }
  @media (min-width: 1200px) {
    width: 33vw;
  }
`
export default TodoList
