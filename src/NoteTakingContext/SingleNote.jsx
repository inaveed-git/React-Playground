import React from 'react';

const SingleNote = ({ note, deleteNote }) => {
    return (
        <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-2xl font-semibold text-gray-800">{note.title}</p>
                    <p className="text-gray-600 mt-2">{note.desc}</p>
                </div>
                <button
                    className="text-red-500 hover:text-red-700 transition-colors duration-300 ml-4"
                    onClick={() => deleteNote(note.id)}
                    aria-label="Delete note"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">{note.date}</p>
        </li>
    );
};

export default SingleNote;
