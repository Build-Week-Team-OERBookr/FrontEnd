import React, {useState} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button'

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
        password: "",
    })
    const handleChanges = event => {
        setSignUp({...signUp, [event.target.name]: event.target.value})
    }
    return (
        <>
            <form className='signup'>
                <h1>Sign Up</h1>
                <p>Enter credentials.</p>
                <label htmlFor='username'>
                    <div>Username</div> 
                    <TextField onChange={handleChanges} id='username' type='text'></TextField>
                </label>
                <label htmlFor='password'>
                    <div>Password</div>
                    <TextField id='password' type='text' onChange={handleChanges}></TextField>  
                </label>
                <br/>
                <Link className='loginPage' style={{textDecoration: 'none'}} to='/'><Button className={classes.button}>Login</Button></Link>
                <br/>
                <Button className={classes.submit}>Submit</Button>
            </form>
        </>
    )
}
export default SignUp