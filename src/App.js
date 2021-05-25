import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import BooksContextProvider from './contexts/BooksContext';
import ThemeContextProvider from './contexts/ThemeContext';



function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <BooksContextProvider>  
            <BookList />
          </BooksContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
