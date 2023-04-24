import React from "react";
import Button from "./Button";

const AddBookmark = () => {
  const handleAddBookmark = () => {
    // Retrieves the current tab's title and url, and saves it into the extension's local storage.
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { title, url } = tabs[0];
      localStorage.setItem(title, url);

      // Then, dispatches a 'storage' event to be intercepted by the event listener on 'BookmarkList'
      const storageEvent = new StorageEvent("storage");
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
