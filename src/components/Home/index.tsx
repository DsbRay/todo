import React, { useState } from 'react'
import styled from 'styled-components'
import ModeSwitch from '../elements/ModeSwitch'
import { useTheme } from '../../utils/context/ThemeContext'
import TodoList from '../TodoList'
import AddTodo from '../elements/AddTodo'

const todosData = [
  { id: 'todo-1', title: 'Duran' },
  { id: 'todo-2', title: 'Bodine' },
]

const Home = () => {
  const { theme } = useTheme()

  const [todos, setTodos] = useState(todosData)

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTodos(items)
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
        <AddTodo />
      </BannerContainer>
      <TodoList todos={todos} onDragEnd={handleDragEnd} />
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
