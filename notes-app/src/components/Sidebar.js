/** @format */

import React from "react";
import styles from "../style.module.css";
import { FaTrashAlt } from "react-icons/fa";
export default function Sidebar(props) {
// console.log('note in curret', props.currentNote);

  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`${styles.title} ${
          note.id === props.currentNote.id ? styles.selectedNote : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className={styles.textSnippet}>{note.body?.split("\n")[0]}</h4>
        {note.id === props.currentNote.id  && (
          <FaTrashAlt
            onClick={()=> props.handleDelete(note.id)}
            color="white"
            className={styles.deleteIcon}
          />
        )}
      </div>
    </div>
  ));

  return (
    <section className={`${styles.pane} ${styles.sidebar}`}>
      <div className={styles.sidebarHeader}>
        <h3 style={{paddingLeft:'5px'}} >Notes</h3>
        <button className={styles.newNote} onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
