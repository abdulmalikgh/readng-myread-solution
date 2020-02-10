import React from 'react';
import BookShelf from './BookShelf';
function CurrentlyReadBooks(props){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2> 
      <BookShelf books={props.books} />
    </div>
 )
}
export default CurrentlyReadBooks;