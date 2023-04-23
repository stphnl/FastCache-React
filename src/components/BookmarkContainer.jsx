import React, { useState, useEffect } from "react";
import Bookmark from "./BookMark";

const BookmarkContainer = () => {
  const [bookmarks, setBookmarks] = useState(Object.entries(localStorage));

  useEffect(() => {
    const handleStorageEvent = () => {
      const newBookMarks = Object.entries(localStorage);
      setBookmarks(newBookMarks);
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  return (
    <main className="bookmark-container">
      <ul className="bookmark-list">
        {bookmarks.map((bookmark) => (
          <Bookmark
            key={bookmark[0] + bookmark[1]}
            webTitle={bookmark[0]}
            webLink={bookmark[1]}
          />
        ))}
      </ul>
    </main>
  );
};

export default BookmarkContainer;
