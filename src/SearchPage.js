import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
class SearchPage extends Component {
  state = {
    loading: false,
    query: "",
    searchedBooks: [],
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      return 1;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot === 1) {
      if (this.state.query === "") {
        this.setState((prev) => {
          const searchedBooks = [];
          return { ...prev, searchedBooks: searchedBooks, loading: false };
        });
      } else {
        BooksAPI.search(this.state.query).then((searchedBooks) => {
          if (searchedBooks.error === "empty query") {
            searchedBooks = [];
          }
          this.setState((prev) => {
            console.log(searchedBooks);

            return { ...prev, searchedBooks: searchedBooks, loading: false };
          });
        });
      }
    }
  }
  render() {
    const changeHandle = (e) => {
      const newValue = e.target.value;
      this.setState((prev) => {
        var loading = true;
        if (newValue === "") {
          loading = false;
          const books = [];
          return {
            ...prev,
            query: newValue,
            loading: loading,
            searchedBooks: books,
          };
        }
        return { ...prev, query: newValue, loading: loading };
      });
    };
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={changeHandle}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <ol className="books-grid">
              {typeof this.state.searchedBooks !== "undefined"
                ? this.state.searchedBooks.map((book) => {
                    var flag = true;
                    return (
                      <li key={book.id}>
                        {this.props.mainPageBooks
                          .filter((mainPageBook) => {
                            return mainPageBook.id === book.id;
                          })
                          .map((mainPageBook) => {
                            flag = false;
                            return (
                              <Book
                                key={mainPageBook.id}
                                info={mainPageBook}
                              />
                            );
                          })}
                        {flag && (
                          <Book
                            key={book.id}
                            info={book}
                          />
                        )}
                      </li>
                    );
                  })
                : null}
            </ol>
          )}
        </div>
      </div>
    );
  }
}
export default SearchPage;
