import React from "react";
import "./styles.css";
import AddBookmark from "./components/AddBookmark";
import BookmarkContainer from "./components/BookmarkContainer";
import logo from "./assets/FastCache.png";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <div className="header">
          <img
            className="logo"
            src={logo}
            alt="FastCache Logo"
          />
          <h1>FastCache</h1>
        </div>
        <AddBookmark />
      </header>
      <BookmarkContainer />
    </div>
  );
};

export default App;
