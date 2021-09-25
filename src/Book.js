import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
class Book extends Component {
  state = {
    id: "",
    shelf: "",
  };
  componentDidUpdate() {
    // this.state.id !== "" &&
    //   this.state.shelf !== "" &&
    //   // BooksAPI.update(this.state.id, this.state.shelf).then((book) => {
    //   // });
     

     
  }
 
  render() {
    const { info } = this.props;

    const selectHandle = (event) => {
      const id = event.target.id;
      const shelf = event.target.value;

      this.setState({ id: id, shelf: shelf });

    };
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                info.imageLinks &&
                "url(" + info.imageLinks.smallThumbnail + ")",
            }}
          />
          <div className="book-shelf-changer">
            <select value={info.shelf?info.shelf:"none"} id={info.id} onChange={selectHandle}>
              <option value="move" disabled>
                Move to...
              </option>
              {info.shelf ===""}

              <option 
              value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{info.title && info.title}</div>
        {info.authors &&
          info.authors.map((author, id) => {
            return (
              <div key={id} className="book-authors">
                {author}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Book;
