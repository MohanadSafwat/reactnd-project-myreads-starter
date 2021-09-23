import React, { Component } from "react";

class Book extends Component {
  render() {
    const { info } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: info.imageLinks && "url(" +   info.imageLinks.smallThumbnail + ")",
            }}
          />
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{info.title && info.title}</div>
        {info.authors && info.authors.map((author, id) => {
          return <div key={id} className="book-authors">{author}</div>;
        })}
      </div>
    );
  }
}

export default Book;
