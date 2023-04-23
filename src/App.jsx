import React from "react";
import "./styles.css";
import AddBookmark from "./components/AddBookmark";
import BookmarkContainer from "./components/BookmarkContainer";

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>FastCache</h1>
        <AddBookmark />
      </header>
      <BookmarkContainer />
    </div>
  );
};

export default App;
