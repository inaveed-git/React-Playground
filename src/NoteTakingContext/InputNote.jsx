import React, { useState, useContext } from 'react';
import { NoteAppContext } from './store/NotesProvider'; // Import context

const InputNote = () => {
    // Form state to capture input values
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        date: ''
    });

    // Access addNote from context
    const { addNote } = useContext(NoteAppContext);

    // Handle input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const submit = (e) => {
        e.preventDefault();

        // Add the note
        if (addNote) {
            addNote(formData.title, formData.desc, formData.date);
        }

        // Reset the form fields
        setFormData({
            title: '',
            desc: '',
            date: ''
        });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <form onSubmit={submit}>
                <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-4">
                        <input
                            value={formData.title}
                            onChange={handleInput}
                            name="title"
                            type="text"
                            placeholder="Enter a title..."
                            className="w-full bg-transparent text-xl font-semibold placeholder-gray-500 focus:outline-none"
                        />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <textarea
                            value={formData.desc}
                            onChange={handleInput}
                            name="desc"
                            placeholder="Write your note here..."
                            className="w-full bg-transparent h-32 text-gray-700 placeholder-gray-500 resize-none focus:outline-none"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <input
                            value={formData.date}
                            onChange={handleInput}
                            name="date"
                            type="date"
                            className="bg-gray-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
                            Add Note
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputNote;
