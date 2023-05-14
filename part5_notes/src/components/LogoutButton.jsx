const LogoutButton = () => {
  const handleLogout = (event) => {
    window.localStorage.clear();
    window.location.reload();
  };
  if (window.localStorage.getItem('loggedNoteAppUser')) {
    return <button onClick={handleLogout}>logout</button>;
  }
};
export default LogoutButton;
