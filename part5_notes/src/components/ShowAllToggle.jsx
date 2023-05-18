const ShowAllToggle = ({ showAll, setShowAll }) => {
  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? 'Important' : 'All'}
      </button>
    </div>
  );
};

export default ShowAllToggle;
