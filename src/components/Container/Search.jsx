import React from "react";

export default function SearchBar({
  placeholder,
  text,
  onChangeEvent,
  className,
}) {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={text}
      onChange={(e) => onChangeEvent(e)}
    />
  );
}
