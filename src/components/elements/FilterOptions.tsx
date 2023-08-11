import React from 'react'
import styled from 'styled-components'

const FilterOptions: React.FC<{}> = () => {
  return (
    <Container>
      <span>5 items left</span>
      <div className='filters'>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>
      <p>Clear Completed</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  span {
    font-size: 0.9rem;
    opacity: 0.7;
  }
  p {
    cursor: pointer;
    transition: all 0.25s ease;
    font-size: 1rem;
    &.active {
      color: #3200f6;
    }
    &:hover {
      opacity: 0.7;
    }
  }
  .filters {
    display: flex;
    gap: 15px;
  }
`

export default FilterOptions
