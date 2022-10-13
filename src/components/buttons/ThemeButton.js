import React from 'react';
import { ThemeConsumer } from '../../contexts/ThemeContext';
import { BsSun, BsMoonFill } from 'react-icons/bs';
 
function ThemeButton() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button className="toggle-theme" onClick={toggleTheme} title={theme === 'light' ? theme : 'dark'}>{theme === 'light' ? <BsMoonFill /> : <BsSun />}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ThemeButton;