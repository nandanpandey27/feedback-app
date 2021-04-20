import React from "react";

export const TextArea = ({
  id = "",
  label = "",
  placeholder = "",
  value = "",
  onChange = () => {},
  className = "",
  ...props
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className={`form-control ${className ? className : ""}`}
        placeholder={placeholder}
        {...props}
      ></textarea>
    </div>
  );
};
