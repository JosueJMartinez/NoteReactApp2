import React from "react";

const InputContent = props => {
  return (
    <textarea
      name="content"
      placeholder="Take a note..."
      rows={props.rows}
      onChange={props.onChange}
      value={props.value}
      onClick={props.onClick}
      className={props.errorClass}
    />
  );
};

export default InputContent;
