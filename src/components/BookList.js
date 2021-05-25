import React, { useContext } from 'react'
import { BooksContext } from '../contexts/BooksContext';
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext);
  const { books } = useContext(BooksContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className='booklist' style={{background: theme.bg, color: theme.syntax }}>
        <ul>
          { books.map(book => {
            return (
              <li key={book.id} style={{background: theme.ui}}>{book.title}</li> 
            )
          })}
        </ul>
      </div>
  )
}

export default BookList;

/* import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
  static contextType = ThemeContext;  
  
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className='booklist' style={{background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{background: theme.ui}}>This is book 1 title</li>
          <li style={{background: theme.ui}}>This is book 2 title</li>
          <li style={{background: theme.ui}}>This is book 3 title</li>
        </ul>
      </div>
    )
  }
} */