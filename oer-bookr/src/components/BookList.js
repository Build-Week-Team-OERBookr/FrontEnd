import React, { useEffect } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getBooks } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';
// component imports
import BookForm from './BookForm';
import BookCard from './BookCard';


const BookList = props => {

    useEffect(() => {
        axiosWithAuth();
        props.dispatch(getBooks());
    }, [])

    return (
        <div>
           {props.isFetching && <h3>Books Coming Soon!</h3>}
           {props.error && <div>{props.error.message}</div>}
           <BookForm />
           {/* {props.books.map((book, id) => {
               <div className='Book' key={id}>
                <BookCard book={book} />
              </div>
           })}  */}
        </div>
    )
}

export default connect(state => {
    return state;
})(BookList);