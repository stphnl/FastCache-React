import React from "react";
import Button from "./Button";

const AddBookmark = () => {
  const handleAddBookmark = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];

      const title = currentTab.title;
      const url = currentTab.url;
      localStorage.setItem(title, url);

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
