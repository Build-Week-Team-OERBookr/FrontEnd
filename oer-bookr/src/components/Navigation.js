import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';



const navigation = () => {
    return(
        <div className="nav">
            <Link style={{textDecoration: 'none'}} to='/'>Home</Link>
            <Link style={{textDecoration: 'none'}} to ='/myaccount'>My Account</Link>
            <Link style={{textDecoration: 'none'}} >Logout</Link>
        </div>
    )
}

export default navigation;