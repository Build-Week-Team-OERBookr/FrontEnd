import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) { 
    const {
        component: Component, 
        ...rest } = props
        
    return (
        <Route
            {...rest} 
            render={(renderProps) =>
            localStorage.getItem('token') ? (
                <Component {...renderProps} />
            ) : (
                    <Redirect to='/' />
                )
            }
        />
    );
}   

export default PrivateRoute