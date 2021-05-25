import React, { createContext, useState } from 'react'

export const BooksContext = createContext();

 const BooksContextProvider = (props) => {

  const [books, setBooks] = useState([
    {title: 'This is book 1 title', id: 1},
    {title: 'This is book 2 title', id: 2},
    {title: 'This is book 3 title', id: 3},
    {title: 'This is book 4 title', id: 4}
  ]);

  return (
    <BooksContext.Provider value={{books, setBooks}}>
      {props.children}
    </BooksContext.Provider>
  )
}


export default BooksContextProvider;