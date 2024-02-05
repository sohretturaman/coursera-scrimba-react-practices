import React from "react"
import styles from  '../style.module.css'
export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                
                className={`${styles.title} ${
                    note.id === props.currentNote.id ? styles.selectedNote : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className={styles.textSnippet}>Note {index + 1}</h4>
            </div>
        </div>
    ))

    return (
        <section className={`${styles.pane} ${styles.sidebar}`}>
            <div className={styles.sidebarHeader}>
                <h3>Notes</h3>
                <button className={styles.newNote} onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
