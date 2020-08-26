import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";

const AddButton = props => {
  return (
    <Zoom in={props.in}>
      <Fab onClick={e => {
          props.addNote(e);
          return e.preventDefault();
        }}
      >
        <AddIcon />
      </Fab>
    </Zoom>
  );
};

export default AddButton;
