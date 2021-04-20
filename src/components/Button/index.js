import React from "react";

export const Button = ({
  onClick = () => {},
  children = "",
  variant = "primary",
  isFullwidth = false,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} ${isFullwidth ? "form-control" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
