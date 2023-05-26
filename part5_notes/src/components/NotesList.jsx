import Note from './Note';
import noteService from '../services/notes';
import PropTypes from 'prop-types';

const NotesList = ({ notes, showAll, setErrorMessage, setNotes }) => {
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Error: ${error}Note | '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  showAll: PropTypes.bool.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default NotesList;
