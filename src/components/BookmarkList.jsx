import React, { useState, useEffect, useRef } from "react";
import Bookmark from "./BookMark";

const BookmarkList = () => {
  const getEntriesAndSort = () => Object.entries(localStorage).sort().reverse();

  const [bookmarks, setBookmarks] = useState(getEntriesAndSort());

  const bookmarkListRef = useRef(null);

  useEffect(() => {
    // Sets our 'bookmarks' state to be an array of arrays, with each subarray being a key-value pair in the extension's localStorage.
    // The key is first element of each subarray, and is the the order of the entry
    // The value is the second element of each subarray, and is an object containing two values: the webTitle and webLink
    const handleAddStorageEvent = () => {
      const currentBookmarksSorted = getEntriesAndSort();
      setBookmarks(currentBookmarksSorted);
      bookmarkListRef.current.scrollTop = 0;
    };

    // Both these functions do the same thing, just that removing an entry doesn't pin the scrollbar to the top
    const handleRemoveStorageEvent = () => {
      const currentBookmarksSorted = getEntriesAndSort();
      setBookmarks(currentBookmarksSorted);
    };

    // Then, add 'storage' event listeners that will trigger either our 'handleAddStorageEvent' or 'handleRemoveStorage' when intercepted.
    // This strategy allows us to get a reactive state change based on modifications to the Extension's localStorage.
    window.addEventListener("addStorage", handleAddStorageEvent);
    window.addEventListener("removeStorage", handleRemoveStorageEvent);
    // Reasoning: when an active tab (in this case, the Extension) is the one making modifications to its localStorage
    // there isn't a 'storage' event natively emitted, so we have to create one ourselves.
    return () => {
      window.removeEventListener("addStorage", handleAddStorageEvent);
      window.removeEventListener("removeStorage", handleRemoveStorageEvent);
    };
  }, []);

  return (
    <ul
      className="bookmark-list"
      ref={bookmarkListRef}
    >
      {bookmarks.map((bookmark) => {
        // Parse the object containing the webTitle and webLink information
        const bookmarkInfo = JSON.parse(bookmark[1]);
        return (
          <Bookmark
            key={bookmark[0]}
            localStorageIndex={bookmark[0]}
            webTitle={bookmarkInfo.webTitle}
            webLink={bookmarkInfo.webLink}
          />
        );
      })}
    </ul>
  );
};

export default BookmarkList;
