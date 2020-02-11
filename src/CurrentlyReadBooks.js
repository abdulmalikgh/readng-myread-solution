import React from 'react';
//import BookShelf from './BookShelf';
function CurrentlyReadBooks(props){
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2> 
      <div className="bookshelf-books">
      <ol className="books-grid">
          {props.books.map( book => (
            <li key={book.id}>
              <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 192 , backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={props.handleChange(book.id)}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">currentlyReading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">none</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
           </div>
           </li>
          ))}
      </ol>
    </div> 
    </div>
 )
}
export default CurrentlyReadBooks;