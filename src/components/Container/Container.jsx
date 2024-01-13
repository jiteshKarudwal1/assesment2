import React, { useState, useEffect } from "react";
import Search from "./Search";
import { bookListMapping, bookPageTexts } from "../../contants/constants";
import "../Common/style.css";
import BookList from "./List";
import AudioPlayer from "./AudioPlayerView";

export default function MyAudioList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  useEffect(() => {
    filteredBooksList();
  }, [bookListMapping, searchQuery]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredBooksList = () => {
    if (!searchQuery) {
      return bookListMapping;
    } else {
      return bookListMapping.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };

  const handleBookSelection = (book) => {
    if (book) {
      setShowAudioPlayer((prev) => !prev);
      setSelectedBook(book);
    }
  };

  return (
    <React.Fragment>
      {/* Search Bar Component with Heading text */}
      <div className="search-bar">
        <div className="header-text">{bookPageTexts.heading}</div>
        <Search
          className="input-search-bar"
          placeholder="Search Books or Author..."
          text={searchQuery}
          onChangeEvent={(e) => handleSearchQueryChange(e)}
        />
      </div>
      {/* Book list Component */}
      <BookList
        bookList={filteredBooksList()}
        handleBookSelection={(e) => handleBookSelection(e)}
      />
      {/* Audio player code below */}
      {showAudioPlayer && selectedBook && (
        <AudioPlayer book={selectedBook} close={(e) => setShowAudioPlayer(e)} />
      )}
    </React.Fragment>
  );
}
