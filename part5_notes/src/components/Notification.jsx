import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  if (message) {
    return <div className='error'>{message}</div>;
  }
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
