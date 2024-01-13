import React from "react";

export default function BookList({ bookList, handleBookSelection }) {
  return (
    <ul className="book-list">
      {bookList.map((item, index) => (
        <li
          key={item.id}
          className="book-list-item"
          onClick={(e) => handleBookSelection(item)}
        >
          <img className="book-img" src={item.cover} alt={item.name} />
          <div className="book-text">
            <div className="book-title">{item.name}</div>
            <div className="book-author">{item.author}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
