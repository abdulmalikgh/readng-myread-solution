import React from 'react';
import BookShelf from './BookShelf';

function CurrentlyReadBooks(props){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2> 
      <div className="bookshelf-books">
        <BookShelf books={props.books} handleChange={props.handleChange} />
    </div> 
    </div>
 )
}
export default CurrentlyReadBooks;