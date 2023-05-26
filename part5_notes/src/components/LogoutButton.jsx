import PropTypes from 'prop-types';

const LogoutButton = ({ setUser }) => {
  const currentUser = JSON.parse(
    window.localStorage.getItem('loggedNoteAppUser')
  );
  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
  };
  if (window.localStorage.getItem('loggedNoteAppUser')) {
    return (
      <div>
        {currentUser.name} <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
};

LogoutButton.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LogoutButton;
