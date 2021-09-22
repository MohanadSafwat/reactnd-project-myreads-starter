import React, { Component } from "react";
import Book from "./Book";
class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {this.props.books.map((book, id) =>{
            return <li  key={id}>
              <Book info={book}/>
            </li>
          })}
         
            
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
