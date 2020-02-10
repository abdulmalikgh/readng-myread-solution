import React ,{ Component } from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';

class  App extends Component{
  state = {
    books: [],
    currentlyReading:[],
    read:[],
    wantToRead:[]
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState( ()=>({
        books
      }))
    })
  }
  shelfType = ()=> {
    this.state.books.map( book => {
      if(book.shelf === 'read') {
        console.log(book)
      } 
    })
    }
  render(){
    this.shelfType()
    console.log('all books', this.state.books)
    return(
      <div className='app'>
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            
          </div>
        </div>
      </div>
    )  
  }
}

export default App;
