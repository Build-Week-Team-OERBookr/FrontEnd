import React, {useState} from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
const SignUp = props => {
    const [signUp, setSignUp] = useState({
        username: "",
        password: "",
        email: "",
        firstname:"",
        lastname:""
    })
    const handleChanges = event => {
        setSignUp({...signUp, [event.target.name]: event.target.value})
    }

    return (
        <>
            <form className='signup'>
                <label htmlFor='firstname'>
                    <div>First Name</div> 
                    <TextField onChange={handleChanges} id='firstname' type='text'></TextField>
                </label>
                <label htmlFor='lastname'>
                    <div>Last Name</div>
                    <TextField id='lastname' type='text' onChange={handleChanges}></TextField>  
                </label>
                <label htmlFor='username'>
                    <div>Username</div> 
                    <TextField onChange={handleChanges} id='username' type='text'></TextField>
                </label>
                <label htmlFor='password'>
                    <div>Password</div>
                    <TextField id='password' type='text' onChange={handleChanges}></TextField>  
                </label>
                <label htmlFor='email'>
                    <div>Email</div>
                    <TextField id='email' type='text' onChange={handleChanges}></TextField>
                </label>
                <br/>
                <Link className='loginPage' style={{textDecoration: 'none'}} to='/'><Button>Login</Button></Link>
                <Button>Sign Up</Button>
            </form>
            
            
            
        </>
    )
}


export default SignUp