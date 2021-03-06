import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import BookList from './BookList';
// import SearchBar from './SearchBar';

function MyAccount(props) {
    const [user, setUser] = useState({
        username: '', 
        password: ''
    });

    useEffect(() => {
        axiosWithAuth()
        .get('auth/login', user)
        .then(res => {
            setUser({
                username: res.data.username,
                password: res.data.password
            })
        })
        .catch(err => {
            console.log('No user found!', err)
        })
    }, [user]);

    return (
        <>
            <div className="SearchAddSection">
                {/* <SearchBar /> */}
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