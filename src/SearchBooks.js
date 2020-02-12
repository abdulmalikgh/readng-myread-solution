import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
   state = {
     searchBooks: [],
     query : '',
   }
   updateQuery = (query)=>{
     this.setState( {
       query:query
     })
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
          <ol className="books-grid">{this.state.query}</ol>
        </div>
      </div>
      )
    }
}

export default SearchBooks;