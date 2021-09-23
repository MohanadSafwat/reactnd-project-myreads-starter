import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Nav from './Nav'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import SearchButton from './SearchButton'
import {Route} from 'react-router'
import SearchPage from './SearchPage'
class BooksApp extends React.Component {
  state = {
    books: [],
 
  }
 
  
  componentDidMount(){
    BooksAPI.getAll().then(
      (books)=>{
        this.setState(()=>({books}))
        // console.log(books)

      }
    )



  }
  render() {
    return (
      <div className="app">

         <Route path='/search' render={()=>(<SearchPage />)}></Route>
         <Route exact path='/' render={()=>(
           <div className="list-books">
            <Nav />
            <div className="list-books-content">
              
               <BookShelf heading="Currently Reading" books={
                 this.state.books.filter((book) =>{
                   return book.shelf === "currentlyReading"
                 })
               }/>
               <BookShelf heading="Want to Read" books={
                 this.state.books.filter((book) =>{
                   return book.shelf === "wantToRead"
                 })
               }/>
               <BookShelf heading="Read" books={
                 this.state.books.filter((book) =>{
                   return book.shelf === "read"
                 })
               }/>
     
            </div>
            <SearchButton />
          </div>
         )}></Route>

          
        
      </div>
    )
  }
}

export default BooksApp
