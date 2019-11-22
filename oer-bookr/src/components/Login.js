import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import {BrowserRouter as Router, Link} from 'react-router-dom';


const useStyles = makeStyles({
    button: {
        backgroundColor:'#39adbf',
        margin:'0 9px',
        marginTop:'5px',
        padding:'4px'

    },
})

const Login = props =>{
    const classes = useStyles(); 
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
                <TextField id='password' type='text' onChange={handleChanges} className={classes.input}></TextField>  
            </label>
            <br/>
            <Button className={classes.button}><span>Login</span></Button>
            <Link  style={{textDecoration: 'none'}} to='/signup'><Button className={classes.button}>Sign Up</Button></Link>
        </form>

    )
}
export default Login
