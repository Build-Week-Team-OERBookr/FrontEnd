import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props =>{
    console.log('props', props);
    const [login, setLogin] = useState({
        username: '',
        password:'',
    })
    const handleChanges= event => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    const logIn = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/auth/login', login)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            props.history.push('/myaccount')
        })
        .catch(err => console.log('Login error', err.message))
    }

    return (
        <form className='login' onSubmit={logIn}>
            <label htmlFor='username'><div>Username</div> 
                <TextField onChange={handleChanges} name='username' id='username' type='text'></TextField>
            </label>
            <label htmlFor='password'><div>Password</div>
                <TextField name='password' id='password' type='text' onChange={handleChanges}></TextField>  
            </label>
            <br/>
            <span><Button type="submit">Login</Button></span>
            <Link className='signUpPage'  style={{textDecoration: 'none'}} to='/signup'><Button>Sign Up</Button></Link>
        </form>
    )
}

export default Login