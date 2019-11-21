import React, {useState} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const SignUp = props => {
    const [signUp, setSignUp] = useState({
        username: "",
        password: ""
    })
    const handleChanges = event => {
        setSignUp({...signUp, [event.target.name]: event.target.value})
        console.log(signUp)
    }

    const register = e => {
        e.preventDefault()
        const user = {
            username: signUp.username,
            password: signUp.password
        }
        axios
        .post('https://oerbookr.herokuapp.com/api/auth/registration', user)
        .then(res => console.log(res.data))
        .catch(err => console.log('Login Error', err.res.message))
    }

    return (
        <>
            <form className='signup' onSubmit={register}>
                <label htmlFor='username'>
                    <div>Username</div> 
                    <TextField onChange={handleChanges} name='username' id='username' type='text' />
                </label>
                <label htmlFor='password'>
                    <div>Password</div>
                    <TextField id='password' name='password' type='text' onChange={handleChanges} /> 
                </label>
                <br/>
                <Link className='loginPage' style={{textDecoration: 'none'}} to='/'><Button>Login</Button></Link>
                <Button type='submit'>Sign Up</Button>
            </form>
            
            
            
        </>
    )
}


export default SignUp