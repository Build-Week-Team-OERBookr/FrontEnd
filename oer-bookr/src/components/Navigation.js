import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



const navigation = () => {

    // logout functionality
    const logout = () => {
        localStorage.removeItem('token');
    }
    
    return(
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
            <Link style={{textDecoration: 'none'}} to ='/myaccount'>My Account</Link>
            <Link style={{textDecoration: 'none'}} onClick={logout} to='/'>Logout</Link>
        </div>
    )
}

export default navigation;