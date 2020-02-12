import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksApi from './BooksAPI';

class SearchBooks extends Component {
   state = {
     searchBooks: []
   }

   updateQuery = (query)=>{
    const SEARCH_TERMS = [
      'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat',
       'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 
       'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
        'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 
        'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
         'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy',
          'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 
          'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 
          'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
     ]
 
  const queryTermFilter = SEARCH_TERMS.filter(
    term=>term.toLowerCase().includes(query.trim()));

   if (query.length > 0 && queryTermFilter.length !== 0) {
    BooksApi.search(query).then(searchBooks => {
      this.setState( ()=> ({
        searchBooks
      }))
     })
     }
     
     }
   
  
    render() {
      return (
        <div className="search-books">
        <div className="search-books-bar">
           <Link to='/'><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            value={this.state.query} onChange = { (event)=> {this.updateQuery(event.target.value)}}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.searchBooks && this.state.searchBooks.map( book => (
            <li key={book.id}>
              <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 192 , backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf}>
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
}

export default SearchBooks;