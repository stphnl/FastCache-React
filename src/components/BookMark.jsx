import React from "react";
import Button from "./Button";

const Bookmark = ({ webTitle, webLink }) => {
  const handleRemoveBookmark = () => {
    localStorage.removeItem(webTitle);
  };

  return (
    <li>
      <a
        href={webLink}
        target="_blank"
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
