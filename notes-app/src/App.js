/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import { data } from "./data";
import Split from "react-split";
import { nanoid } from "nanoid";

import styles from "./style.module.css";
/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
  let currentvals = () => JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = React.useState(currentvals || []);
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
  /*   setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      })
    ); */

    setNotes(oldNotes => {
        const newArray = []
        for(let i = 0; i < oldNotes.length; i++) {
            const oldNote = oldNotes[i]
            if(oldNote.id === currentNoteId) {
                newArray.unshift({ ...oldNote, body: text })
            } else {
                newArray.push(oldNote)
            }
        }
        return newArray
    })
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    const newArray = notes.filter((note) => note.id !== noteId);
    setNotes(newArray);
  }
  return (
    <main>
      {notes.length > 0 ? (
        <Split //used to split sidebar and main tab !!
          sizes={[30, 70]}
          direction="horizontal"
          className={styles.split}
        >
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            handleDelete={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className={styles.noNotes}>
          <h1>You have no notes</h1>
          <button className={styles.firstNote} onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}