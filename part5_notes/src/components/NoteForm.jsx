import { useState } from 'react';
import PropTypes from 'prop-types';

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    createNote({
      content: newNote,
      important: true,
    });
    setNewNote('');
  };

  return (
    <>
      <h2>Create a New Note</h2>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

NoteForm.propTypes = {
  createNote: PropTypes.func.isRequired,
};

export default NoteForm;
