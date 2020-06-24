import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const DeleteButton = props => {
  return (
    <Button
      variant="contained"
      onClick={e => {
        return props.deleteNote();
      }}
    >
      <DeleteIcon />
    </Button>
  );
};

export default DeleteButton;
