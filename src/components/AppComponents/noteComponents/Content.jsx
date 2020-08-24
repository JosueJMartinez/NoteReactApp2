import React from "react";

const Content = props => {
  return (
    <>
      <p>{props.content}</p>
      <p class="date">{props.date}</p>
    </>
  );
};

export default Content;
