import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navigation from './components/Navigation'
import './App.css';
// component imports
import MyAccount from './components/MyAccount';
import PrivateRoute from './components/PrivateRoute';
import BookCard from './components/BookCard';

function App() {
  
  return (
    <Router>
      <div className='App'>
        <Navigation/>
        <div className='App-header'>
          <img className='backgroundImg' alt='bookshelf' src={require('./DesignFiles/background.jpg')}></img>
          <img className='logoImg' src={require('./DesignFiles/logo.png')} alt='logo'/>
          <Route exact path ='/' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
        </div>
        <div className='Booklist'>
          <Switch>
            <PrivateRoute exact path='/myaccount' component={MyAccount} />
            <PrivateRoute exact path='/books/:id' component={BookCard} />
          </Switch>    
        </div>
      </div>
    </Router>

  );
}

export default App;
