import React, { useState } from "react";

function AddNote({ handleAddNote }) {
  const [notetext, setNoteText] = useState("");
  let characterlimit = 200;

  const handlechange = (e) => {
    if (characterlimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSaveclick = () => {
    if (notetext.trim().length > 0) {
      handleAddNote(notetext);
      setNoteText("");
    }
    
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={notetext}
        onChange={handlechange}
      ></textarea>
      <div className="note-footer">
        <small>200{characterlimit - notetext.length > 0} Remaining</small>
        <button className="save" onClick={handleSaveclick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
