import React from "react";

export const Input = ({
  id = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  type = "text",
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`form-control ${className ? className : ""}`}
        {...props}
      />
    </div>
  );
};
