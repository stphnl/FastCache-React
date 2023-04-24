import React from "react";
import "./styles.css";
import Header from "./components/Header";
import AddBookmark from "./components/AddBookmark";
import BookmarkList from "./components/BookmarkList";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <AddBookmark />
      <BookmarkList />
    </div>
  );
};

export default App;
