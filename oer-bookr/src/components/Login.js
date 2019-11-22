import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import axiosWithAuth from '../utils/axiosWithAuth';



const useStyles = makeStyles({
    button: {
        backgroundColor: '#39adbf',
        margin: '0 9px',
        marginTop: '5px',
        padding: '4px'



    },
})

const Login = props => {
    const classes = useStyles();

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChanges = event => {
        setLogin({ ...login, [event.target.name]: event.target.value })
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
                <TextField name='password' id='password' type='text' onChange={handleChanges} className={classes.input}></TextField>
            </label>
            <br />
            <Button type='submit' className={classes.button}>Login</Button>
            <Link style={{ textDecoration: 'none' }} to='/signup'><Button className={classes.button}>Sign Up</Button></Link>
        </form>
    )
}
export default Login
