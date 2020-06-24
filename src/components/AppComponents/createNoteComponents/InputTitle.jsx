import React from "react";
const InputTitle = props => {
  return (
    <input
      name="title"
      placeholder="Title"
      onChange={props.onChange}
      value={props.value}
      autoFocus
      className={props.errorClass}
    />
  );
};

export default InputTitle;
