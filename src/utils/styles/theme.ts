import darkBanner from '../../images/bg-desktop-dark.jpg'
import lightBanner from '../../images/bg-desktop-light.jpg'
import moonIcon from '../../images/icon-moon.svg'
import sunIcon from '../../images/icon-sun.svg'

const lightTheme = {
  colors: {
    background: '#E6EBF4',
    text: '#333333',
    primary: '#007bff',
    todo: '#ffffff',
    todoText: '#7B8AA7',
    circle: '#E6EBF4',
  },
  banner: lightBanner,
  modeIcon: moonIcon,
};

const darkTheme = {
  colors: {
    background: '#121212',
    text: '#f5f5f5',
    primary: '#90caf9',
    todo: '#1e243a',
    todoText: '#D5D9E0',
    circle: '#8790a8',
  },
  banner: darkBanner,
  modeIcon: sunIcon,
};

export { lightTheme, darkTheme };
