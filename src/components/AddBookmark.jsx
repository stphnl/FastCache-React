import React from "react";
import Button from "./Button";

const AddBookmark = () => {
  const handleAddBookmark = () => {
    // Pull all the entries from localStorage to put into sessionStorage for the purposes of checking against a link that was already added
    // Have to make sure to clear the session storage first before pulling
    sessionStorage.clear();
    const bookmarkEntriesForSessionStorage = Object.values(localStorage).map(
      (entry) => JSON.parse(entry)
    );

    for (const entry of bookmarkEntriesForSessionStorage) {
      sessionStorage.setItem(entry.webLink, entry.webTitle);
    }

    // Retrieves the current tab's title and url, and saves it into the extension's local storage.
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const { title, url } = tabs[0];

      // If the current webpage's URL is already in our local/session storage, don't add it again
      if (sessionStorage.getItem(url)) return;

      // Use 'localStorageIndex' to keep track of the order of entry of items
      const localStorageIndex = localStorage.length;
      const bookmarkTabInfo = JSON.stringify({ webTitle: title, webLink: url });
      // Each entry in local storage will have a key-value pair where the key is the entry order
      // and the value is an object with the webTitle and webLink properties
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
