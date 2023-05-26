import PropTypes from 'prop-types';

const ShowAllToggle = ({ showAll, setShowAll }) => {
  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? 'Important' : 'All'}
      </button>
    </div>
  );
};

ShowAllToggle.propTypes = {
  showAll: PropTypes.bool.isRequired,
  setShowAll: PropTypes.func.isRequired,
};

export default ShowAllToggle;
