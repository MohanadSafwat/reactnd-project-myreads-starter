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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll().then(
      (books)=>{
       console.log(books)
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
              
               <BookShelf heading="Currently Reading"/>
               <BookShelf heading="Want to Read"/>
               <BookShelf heading="Read"/>
     
            </div>
            <SearchButton />
          </div>
         )}></Route>

          
        
      </div>
    )
  }
}

export default BooksApp
