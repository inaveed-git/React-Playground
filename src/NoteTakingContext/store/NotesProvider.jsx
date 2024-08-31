import React, { createContext, useState } from 'react';

// Create a new context
export const NoteAppContext = createContext();

const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    // Function to add a new note
    const addNote = (title, desc, date) => {
        const newNote = { id: Date.now(), title, desc, date };
        setNotes((currentNote) => [...currentNote, newNote]);
    };

    // Function to delete a note
    const deleteNote = (noteId) => {
        const newNotes = notes.filter((note) => note.id !== noteId);
        setNotes(newNotes);
    };

    return (
        <NoteAppContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NoteAppContext.Provider>
    );
};

export default NotesProvider;
