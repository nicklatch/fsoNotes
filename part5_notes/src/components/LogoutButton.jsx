const LogoutButton = ({ setUser }) => {
  const handleLogout = (event) => {
    window.localStorage.clear();
    setUser(null);
  };
  if (window.localStorage.getItem('loggedNoteAppUser')) {
    return <button onClick={handleLogout}>logout</button>;
  }
};
export default LogoutButton;
