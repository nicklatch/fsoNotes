import { useState, useEffect } from 'react';
import noteService from './services/notes';
import LoginForm from './components/LoginForm';
import NoteForm from './components/NoteForm';
import NoteList from './components/NotesList';
import Notification from './components/Notification';
import Footer from './components/Footer';
import ShowAllToggle from './components/ShowAllToggle';
import Togglable from './components/Toggleable';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  return (
    <>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      {user === null ? (
        <Togglable buttonLabel='login'>
          <LoginForm setErrorMessage={setErrorMessage} setUser={setUser} />
        </Togglable>
      ) : (
        <NoteForm
          user={user}
          setUser={setUser}
          notes={notes}
          setNotes={setNotes}
        />
      )}
      <ShowAllToggle showAll={showAll} setShowAll={setShowAll} />
      <NoteList
        notes={notes}
        showAll={showAll}
        setErrorMessage={setErrorMessage}
        setNotes={setNotes}
      />
      <Footer />
    </>
  );
};

export default App;
