import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
const Login = props =>{
    console.log('props', props);
    const [login, setLogin] = useState({
        username: '',
        password:'',
    })
    const handleChanges= event => {
        setLogin({...login, [event.target.name]: event.target.value})
    }

    return (
            <form className='login'>
                <label htmlFor='username'><div>Username</div> 
                    <TextField onChange={handleChanges} id='username' type='text'></TextField>
                </label>
                <label htmlFor='password'><div>Password</div>
                    <TextField id='password' type='text' onChange={handleChanges}></TextField>  
                </label>
                <br/>
                <span><Button>Login</Button></span>
                <Link className='signUpPage'  style={{textDecoration: 'none'}} to='/signup'><Button>Sign Up</Button></Link>
                
            </form>
    )
}

export default Login