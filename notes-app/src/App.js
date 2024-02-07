/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import styles from "./style.module.css";
import { notesCollection,db } from "./Firebase"; 
import  {addDoc,  onSnapshot,deleteDoc,doc, updateDoc} from 'firebase/firestore'
/**
 * Challenge: Spend 10-20+ minutes reading through the code
 * and trying to understand how it's currently working. Spend
 * as much time as you need to feel confident that you
 * understand the existing code (although you don't need
 * to fully understand everything to move on)
 */

export default function App() {
  // let currentvals = () => JSON.parse(localStorage.getItem("notes"));
  const [notes, setNotes] = useState( []);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0]?.id) || ""
  );

  useEffect(() => {
   
    const unsubscribe = onSnapshot(notesCollection, function(snapshot) {
      // Sync up our local notes array with the snapshot data
      const notesArr = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
      }))
      setNotes(notesArr)
      console.log('created at info ', notesArr[4].createdAt);
      
  })
  return unsubscribe
    

        
   
     
    
  }, []);

   async function createNewNote() {
    const newNote = {
     // id: nanoid(),
      body: "# Type your markdown note's title here",
      createdAt: Date.now(),
      updatedAt : Date.now()
    };
  
     const newNoteRef =  await  addDoc(notesCollection,newNote);
     
    setCurrentNoteId(newNoteRef?.id); // update current note id with setCurrentNote state  we need ti to make  arrangement
  }

  function updateNote(text) {
   const updatableDoc = doc(db, 'notes', currentNoteId);  // take db object give collection naem and current it 
   updateDoc(updatableDoc,{body:text,updatedAt:Date.now()},{merge:true})

     
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)
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
