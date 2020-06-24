import React, { useState } from "react";
import Header from "./AppComponents/Header";
import Note from "./AppComponents/Note";
import Footer from "./AppComponents/Footer";
import CreateNote from "./AppComponents/CreateNote";
//testing see if uploaded
const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = input => {
    setNotes(prevNotes => {
      return [...prevNotes, input];
    });
  };

  const deleteNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return id !== index;
      });
    });
  };

  const NotesCreation = () => {
    return notes.map((note, index) => {
      return (
        <Note
          title={note.title}
          content={note.content}
          key={index}
          id={index}
          deleteNote={deleteNote}
        />
      );
    });
  };
  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {NotesCreation()}
      <Footer />
    </div>
  );
};

export default App;
