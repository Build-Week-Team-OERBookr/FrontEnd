import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Login from './components/Login';
import SignUp from './components/Signup'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <header className="App-header">
      <img className='logo' src={require('./logo.png')} />
        <Route exact path='/' component={Login}/>
        <Route path='/signup' component={SignUp}/>
      </header>
    </div>
    </Router>
  );
}

export default App;
