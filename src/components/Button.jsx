import React from "react";

const Button = ({ type, text, handleClick }) => {
  return (
    <button
      className={`button ${type}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
