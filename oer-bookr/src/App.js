import React from 'react';
import './App.css';
// component imports
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>OER Bookr coming soon!</h1>
      </header>
      <BookList />
    </div>
  );
}

export default App;
