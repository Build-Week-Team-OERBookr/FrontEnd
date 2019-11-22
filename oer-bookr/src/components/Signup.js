import React, {useState} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles({
    button: {
        backgroundColor:'#39adbf',
        margin:'0 9px',
        marginTop:'5px',
        padding:'4px'
    },
    submit: {
        marginTop:'10px',
        backgroundColor:'white',
        border:'2px solid black'
    }
})
const SignUp = props => {
    const classes = useStyles();
    const [signUp, setSignUp] = useState({
        username: "",
        password: ""
    })

    const handleChanges = event => {
        setSignUp({...signUp, [event.target.name]: event.target.value})
    }

    const register = e => {
        console.log('register')
        e.preventDefault()
        const user = {
            username: signUp.username,
            password: signUp.password
        }
        axios
            .post('https://oerbookr.herokuapp.com/api/auth/registration', user)
            .then(res => { console.log(res.data)
                localStorage.setItem('token', res.data.token)
                props.history.push('/myaccount')
            })
            .catch(err => console.log('Signup Error', err.message))
    }

    return (
        <>
            <form className='signup' onSubmit={register}>
                <h1>Sign Up</h1>
                <p>Enter credentials.</p>
                <label htmlFor='username'>
                    <div>Username</div> 
                    <TextField onChange={handleChanges} name='username' id='username' type='text' />
                </label>
                <label htmlFor='password'>
                    <div>Password</div>
                    <TextField name='password' id='password' type='password' onChange={handleChanges} />  
                </label>
                <br/>
                <Link className='loginPage' style={{textDecoration: 'none'}} to='/'><Button className={classes.button}>Login</Button></Link>
                <br/>
                <Button type="submit" className={classes.submit}>Submit</Button>
            </form>
        </>
    )
}
export default SignUp