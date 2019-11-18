import React, { useEffect } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getBooks } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';


const BookList = props => {

    useEffect(() => {
        axiosWithAuth()
        props.dispatch(getBooks())
    }, [])

    return (
        <div>
           {props.isFetching && <h3>Books Coming Soon!</h3>}
           {props.error && <div>{props.error.message}</div>}
           {props.books.map((book, id) => {
               <div className="book" key={id}>
                   <BookCard />
                </div>
           })} 
        </div>
    )
}