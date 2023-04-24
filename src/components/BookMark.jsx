import React from "react";
import Button from "./Button";

const Bookmark = ({ webTitle, webLink }) => {
  const handleRemoveBookmark = () => {
    localStorage.removeItem(webTitle);

    const storageEvent = new StorageEvent("storage");
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
