import React, { useEffect } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getBooks } from '../actions';
import axiosWithAuth from '../utils/axiosWithAuth';
// component imports
import AddBookForm from './AddBookForm';
// import BookCard from './BookCard';
import SearchBar from './SearchBar';


const BookList = props => {

    useEffect(() => {
        axiosWithAuth();
        props.dispatch(getBooks());
    }, [])

    return (
        <div>
            <SearchBar />
           {props.isFetching && <h3>Books Coming Soon!</h3>}
           {props.error && <div>{props.error.message}</div>}
           <AddBookForm />
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