import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Navigation from './components/Navigation'
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation/>
        <header className='App-header'>
          <img className='backgroundImg' src={require('./DesignFiles/background.jpg')}></img>
          <img className='logoImg' src={require('./DesignFiles/logo.png')} alt='logo'/>
          <Route exact path ='/' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
        </header>
        <div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
