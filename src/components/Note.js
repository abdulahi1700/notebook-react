import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Note({ id, text, date, handledelete }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <span>{date}</span>
        <MdDeleteForever
          onClick={() => handledelete(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
