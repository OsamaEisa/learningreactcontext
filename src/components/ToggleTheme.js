import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class ToggleTheme extends Component {
  
  static contextType = ThemeContext;
  
  render () {
    const { toggleTheme } = this.context;
    return (
      <div>
        <button onClick={toggleTheme}>Toggle the theme</button>
      </div>
    )
  }
}
