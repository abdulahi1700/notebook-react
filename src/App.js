import React, { useState } from "react";
import "./index.css";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first project",
      date: "17/07/2023",
    },
    {
      id: nanoid(),
      text: "this is my second project",
      date: "12/07/2023",
    },
    {
      id: nanoid(),
      text: "this is my third project",
      date: "28/07/2023",
    },
    {
      id: nanoid(),
      text: "this is my New project",
      date: "30/07/2023",
    },
  ]);
  const [searchnote, setsearchNote] = useState("");

  const AddNote = (text) => {
    const date = new Date();
    const Newdate = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const Newnotes = [...notes, Newdate];
    setNotes(Newnotes);
  };

  const Delete = (id) => {
    let newitem = notes.filter((item) => item.id !== id);
    setNotes(newitem);
  };
  return (
    <div className="app">
      <Search handlesearch={setsearchNote} />
      <NoteList
        notes={notes.filter((item) =>
          item.text.toLowerCase().includes(searchnote)
        )}
        handleAddNote={AddNote}
        handledelete={Delete}
      />
    </div>
  );
}

export default App;
