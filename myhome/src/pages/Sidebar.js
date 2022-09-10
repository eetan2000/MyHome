import React from 'react'
import "../App.css"

export default function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)

    return (
        <div className='notes-sidebar'>
            <div className='notes-sidebar-header'>
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="notes-sidebar-notes">
                {sortedNotes.map(({ id, title, body, lastModified }, i) => (

                <div className={`notes-sidebar-note ${id === activeNote && "active"}`} onClick={() => setActiveNote(id)}>
                    <div className="sidebar-note-title">
                        <strong>{title}</strong>
                        <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                    </div>

                    <p>{body && body.substr(0, 100) + "..."}</p>

                    <small className="note-meta">
                        Last Modified{" "}
                        {new Date(lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",})}
                    </small>
                </div>
                ))}
            </div>
        </div>
    )
}