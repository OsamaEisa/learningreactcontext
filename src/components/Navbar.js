import React, { Component } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'


export default class Navbar extends Component {
  
  // static contextType = ThemeContext;

  render() {
    // console.log(this.context);
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          const auth = isAuthenticated ? 'logged in :)' : 'logged out :(';
          return (
            <nav className='navbar' style={{background: theme.ui, color: theme.syntax}}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                { auth }
              </div>

              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )   
        }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>

    )
    
  }
}
