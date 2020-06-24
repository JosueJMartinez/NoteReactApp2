import React, { useState } from "react";
import AddButton from "./createNoteComponents/AddButton";
import InputTitle from "./createNoteComponents/InputTitle";
import InputContent from "./createNoteComponents/InputContent";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import ErrorMessage from "./createNoteComponents/ErrorMessage";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function CreateNote(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [input, setInput] = useState({ title: "", content: "" });
  const [isHidden, setHidden] = useState(true);
  const [isError, setError] = useState({
    title: false,
    content: false,
    message: ""
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prevInput => {
      return { ...prevInput, [name]: value };
    });
    setError(prevError => {
      return { ...prevError, [name]: false };
    });
  };

  const addNote = e => {
    if (!input.title.trim() && !input.content.trim()) {
      setError({
        title: true,
        content: true,
        message: "Missing title and content"
      });
      return setAnchorEl(e.currentTarget);
    }
    if (!input.title.trim()) {
      setError(prevVal => {
        return { ...prevVal, title: true, message: "Missing title" };
      });
      return setAnchorEl(e.currentTarget);
    }
    if (!input.content.trim()) {
      setError(prevVal => {
        return { ...prevVal, content: true, message: "Missing content" };
      });
      return setAnchorEl(e.currentTarget);
    }
    props.addNote(input);
    setInput({ title: "", content: "" });
    setHidden(true);
  };

  const handleClick = () => {
    setHidden(false);
  };

  return (
    <form className="create-note">
      {!isHidden && (
        <InputTitle
          errorClass={isError.title ? "error" : ""}
          value={input.title}
          onChange={handleChange}
        />
      )}
      {isError.title ? <ErrorMessage message="No title" /> : ""}
      <InputContent
        value={input.content}
        onChange={handleChange}
        rows={!isHidden ? 3 : 1}
        onClick={handleClick}
        errorClass={isError.content ? "error" : ""}
      />
      {isError.content ? <ErrorMessage message="No content" /> : ""}
      <AddButton in={!isHidden} addNote={addNote} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography className={classes.typography}>
          {isError.message}
        </Typography>
      </Popover>
    </form>
  );
}
