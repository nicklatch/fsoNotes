const LogoutButton = ({ setUser }) => {
  const currentUser = JSON.parse(
    window.localStorage.getItem('loggedNoteAppUser')
  );
  const handleLogout = (event) => {
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
export default LogoutButton;
