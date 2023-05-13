import React from "react";
import Button from "./Button";

const AddBookmark = () => {
  const handleAddBookmark = () => {
    // Retrieves the current tab's title and url, and saves it into the extension's local storage.
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { title, url } = tabs[0];
      const localStorageIndex = localStorage.length;
      const bookmarkTabInfo = JSON.stringify({ webTitle: title, webLink: url });

      // Use 'localStorageIndex' to keep track of the order of entry of items
      // so that they can be displayed in the order they were saved
      localStorage.setItem(localStorageIndex, bookmarkTabInfo);

      // Then, dispatches a 'storage' event to be intercepted by the event listener on 'BookmarkList'
      const storageEvent = new StorageEvent("addStorage");
      window.dispatchEvent(storageEvent);
    });
  };

  return (
    <section className="add-bookmark-container">
      <Button
        type="add"
        text="ADD LINK"
        handleClick={handleAddBookmark}
      />
    </section>
  );
};

export default AddBookmark;
