import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ModeSwitch from '../elements/ModeSwitch'
import { useTheme } from '../../utils/context/ThemeContext'
import TodoList from '../TodoList'
import AddTodo from '../elements/AddTodo'

interface Todo {
  id: string
  title: string
  complete: boolean
}
const Home = () => {
  const { theme } = useTheme()

  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTodos(items)
  }

  const createId = (value: string) => {
    const urlFriendlyString = value.replace(/\s+/g, '-')
    const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10
    return `${urlFriendlyString}-${randomTwoDigitNumber}`
  }

  const addNewTodo = (title: string) => {
    const id = createId(title)
    const newTodo: Todo = {
      id,
      title,
      complete: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const deleteTodo = (todo: Todo) => {
    const updatedTodos = todos.filter((existingTodo) => existingTodo.id !== todo.id)
    setTodos(updatedTodos)
  }

  const completeToggle = (todo: Todo) => {
    const updatedTodos = todos.map((existingTodo) =>
      existingTodo.id === todo.id ? { ...existingTodo, complete: !existingTodo.complete } : existingTodo
    )
    setTodos(updatedTodos)
  }

  const filterTodos = (filter: string) => {
    setFilter(filter)
  }
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true
    } else if (filter === 'incomplete') {
      return !todo.complete
    } else if (filter === 'complete') {
      return todo.complete
    }
    return false
  })
  const clearCompleted = () => {
    const incompleteTodos = todos.filter((todo) => !todo.complete)
    setTodos(incompleteTodos)
  }
  return (
    <>
      <BannerContainer theme={theme}>
        <Header>
          <div className='flex'>
            <h1>TODO</h1>
            <ModeSwitch />
          </div>
        </Header>
        <AddTodo addNewTodo={addNewTodo} />
      </BannerContainer>
      {todos.length > 0 && (
        <TodoList
          todos={filteredTodos}
          onDragEnd={handleDragEnd}
          deleteTodo={deleteTodo}
          completeToggle={completeToggle}
          filterTodos={filterTodos}
          filterType={filter}
          clearCompleted={clearCompleted}
        />
      )}
    </>
  )
}

const BannerContainer = styled.div`
  height: 33vh;
  width: 100%;
  background-image: url(${(props) => props.theme.banner});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`
const Header = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 10vh 20px 0 20px;
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: var(--white);
      letter-spacing: 1rem;
      font-size: 3rem;
    }
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 33vw;
  }
`
export default Home
