import React from 'react'
import styled from 'styled-components'

interface Props {
  incompleteTodosCount: number
  handleFilterTodos: (e: string) => void
  filterType: string
  handleClear: () => void
}

const FILTER_TYPES = [
  { label: 'All', type: 'all' },
  { label: 'Active', type: 'incomplete' },
  { label: 'Completed', type: 'complete' },
]

const FilterOptions: React.FC<Props> = ({ incompleteTodosCount, handleFilterTodos, filterType, handleClear }) => {
  const renderFilters = () => {
    return FILTER_TYPES.map((filter, i) => {
      return (
        <p
          key={i}
          className={filterType === filter.type ? 'active' : ''}
          onClick={() => handleFilterTodos(filter.type)}
        >
          {filter.label}
        </p>
      )
    })
  }
  return (
    <Container>
      <span>
        {incompleteTodosCount} {incompleteTodosCount === 1 ? 'Item' : 'Items'} left
      </span>
      <div className='filters'>{renderFilters()}</div>
      <p onClick={handleClear}>Clear Completed</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  span {
    font-size: 0.6rem;
    opacity: 0.7;
    width: auto;
  }
  p {
    cursor: pointer;
    transition: all 0.25s ease;
    font-size: 0.7rem;
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
  @media (min-width: 1200px) {
    span {
      font-size: 0.8;
      width: 100px;
    }
    p {
      font-size: 1rem;
    }
  }
`

export default FilterOptions
