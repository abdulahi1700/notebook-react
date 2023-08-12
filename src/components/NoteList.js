import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

function NoteList({ notes, handleAddNote, handledelete }) {
  return (
    <div className="notelist">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handledelete={handledelete}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NoteList;
