import React from "react";

// Takes in 3 props, which will be used to determine
// 1. 'type' of the button (Add or Delete)
// 2. 'text' inside of the button
// 3. 'handleClick' event the button will trigger
const Button = ({ type, text, handleClick }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </button>
  );
};

export default Button;
