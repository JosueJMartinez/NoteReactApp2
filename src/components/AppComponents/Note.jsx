import React from "react";
import Title from "./noteComponents/Title";
import DeleteButton from "./noteComponents/DeleteButton";
import Content from "./noteComponents/Content";

const Note = props => {
  const deleteNote = () => {
    return props.deleteNote(props.id);
  };
  return (
    <div className="note">
      <Title title={props.title} />
      <Content content={props.content} date={props.date} />
      <DeleteButton deleteNote={deleteNote} />
    </div>
  );
};

export default Note;
