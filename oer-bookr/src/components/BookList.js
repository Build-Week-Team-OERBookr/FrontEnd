import React, { useState, useEffect } from 'react';
// react-redux imports
import { connect } from 'react-redux';
// action import
import { getBooks } from '../actions';
// import axiosWithAuth from '../utils/axiosWithAuth';
// component imports
import AddBookForm from './AddBookForm';
import BookCard from './BookCard';
// import SearchBar from './SearchBar';


const BookList = props => {
console.log('booklist', props)
    
    useEffect(() => {
        props.getBooks();
        console.log('inside hook', props.books)
    }, [])

    return (
        <div>
          
           {props.isFetching && <h3>Books Coming Soon!</h3>}
           {props.error && <div>{props.error.message}</div>}
           <AddBookForm />
           {props.books && props.books.map((book, id) => (
            //    console.log(book)
               <div className='Book' key={id}>
                <BookCard book={book} />
              </div>
           ))} 
        </div>
    )
}
const mapStateToProps=state => {
    console.log('mSTP', state)
    return {
        books: state.books
    }
}
export default connect(mapStateToProps, {getBooks})(BookList);