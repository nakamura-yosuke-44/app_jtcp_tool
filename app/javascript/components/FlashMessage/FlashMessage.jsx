import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function showFlash(showMessage, setShowMessage) {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [showMessage, setShowMessage]);
}

function FlashMessage({ message, showMessage, setShowMessage }) {
  showFlash(showMessage, setShowMessage);

  return showMessage ? (
    <div className="bg-green-500 px-4 py-2 text-white mb-4 fixed top-16 left-0 right-0 z-50">
      {message}
    </div>
  ) : null;
}

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  showMessage: PropTypes.bool.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};

export default FlashMessage;
