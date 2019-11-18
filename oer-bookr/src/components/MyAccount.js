import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';

function MyAccount() {
    const [user, setUser] = useState({
        username: '', 
        email: ''
    });

    useEffect(() => {
        axiosWithAuth()
        .get('/login', user)
        .then(res => {
            setUser({
                username: res.data.username,
                email: res.data.email
            })
        })
        .catch(err => {
            console.log('No user found!', err)
        })
    }, [user]);

    return (
        <>
            <div className="SearchAddSection">
                <SearchBar />
                {/* add book component */}
            </div>
            <div className="Book-List">
                <BookList />
            </div>
        </>
    )
}


export default connect(state => {
    return state;
})(MyAccount);