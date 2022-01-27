import React from "react";
const Button = ({ label, className, onButtonClick }) => {
  return (
      <button className={`buttonStyle ${className}`  }  onClick={(e) => onButtonClick(e)}>
        {label}
      </button>
  );
};
export default Button;
