import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className="error">{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
