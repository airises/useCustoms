import React from "react";

const Button = ({ icon, onClick, children, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {icon} {children}
    </button>
  );
};

export default Button;
