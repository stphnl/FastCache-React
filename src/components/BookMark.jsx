import React from "react";
import Button from "./Button";

const Bookmark = ({ localStorageIndex, webTitle, webLink }) => {
  // Removes the link from the extension's local storage
  const handleRemoveBookmark = () => {
    localStorage.removeItem(localStorageIndex);

    // Then, dispatches a 'storage' event to be intercepted by the event listener on 'BookmarkList'
    const storageEvent = new StorageEvent("removeStorage");
    window.dispatchEvent(storageEvent);
  };

  return (
    <li>
      <a
        href={webLink}
        target="_blank"
        rel="noreferrer"
      >
        {webTitle}
      </a>
      <Button
        type="delete"
        text="-"
        handleClick={handleRemoveBookmark}
      />
    </li>
  );
};

export default Bookmark;
