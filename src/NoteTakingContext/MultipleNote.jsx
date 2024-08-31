import React, { useContext } from 'react';
import SingleNote from './SingleNote';
import { NoteAppContext } from './store/NotesProvider'; // Import context

const MultipleNote = () => {
    const { notes, deleteNote } = useContext(NoteAppContext); // Use context

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">All Notes</h2>
            {notes.length > 0 ? (
                <ul className="space-y-4">
                    {notes.map((note) => (
                        <SingleNote key={note.id} note={note} deleteNote={deleteNote} />
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 text-center">No notes available. Start adding some!</p>
            )}
        </div>
    );
};

export default MultipleNote;
