import React from 'react'
import "../App.css"

import {nanoid} from "nanoid"

import Sidebar from "./Sidebar"
import Main from "./Main"

export default function Notes() {
    const [notes, setNotes] = React.useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );

    const [activeNote, setActiveNote] = React.useState(false);

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
          id: nanoid(),
          title: "Untitled Note",
          body: "",
          lastModified: Date.now(),
        };
    
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
    };

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
    };
    
    const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
    };
    
    const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
    };

    return (
        <div className='note-container'>
            <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
            <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
        </div>
    )
}