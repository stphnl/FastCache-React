import React, { useState, useEffect } from "react";
import Bookmark from "./BookMark";

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState(Object.entries(localStorage));

  useEffect(() => {
    // Sets our 'bookmarks' state to be an array of arrays, with each subarray being a key-value pair in the extension's localStorage.
    // The key is first element of each subarray, and is the title of the webpage
    // The value is the second element of each subarray, and is the URL of the webpage
    const handleStorageEvent = () => {
      const newBookMarks = Object.entries(localStorage);
      setBookmarks(newBookMarks);
    };

    // Then, add a 'storage' event listener that will trigger our 'handleStorageEvent' when intercepted.
    // This strategy allows us to get a reactive state change based on modifications to the Extension's localStorage.
    window.addEventListener("storage", handleStorageEvent);
    // Reasoning: when an active tab (in this case, the Extension) is the one making modifications to its localStorage
    // there isn't a 'storage' event natively emitted, so we have to create one ourselves.
    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  return (
    <ul className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark[0] + bookmark[1]}
          webTitle={bookmark[0]}
          webLink={bookmark[1]}
        />
      ))}
    </ul>
  );
};

export default BookmarkList;
