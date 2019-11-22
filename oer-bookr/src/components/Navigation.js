import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



const navigation = () => {
    return(
        <div className='navcontainer'>
            <div className='nav'>
                <Link style={{textDecoration: 'none', color: 'black'}} to='/'>Home</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} to ='/myaccount'>My Account</Link>
                <Link style={{textDecoration: 'none', color: 'black'}} >Logout</Link>
            </div>
        </div>
    )
}

export default navigation;