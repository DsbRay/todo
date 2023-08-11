import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/context/ThemeContext'

const ModeSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  return <SwitchButton onClick={toggleTheme} theme={theme} />
}

const SwitchButton = styled.div`
  height: 2rem;
  width: 2rem;
  background-image: url(${(props) => props.theme.modeIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform: scale(0.9);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    opacity: 0.7;
  }
`

export default ModeSwitch
