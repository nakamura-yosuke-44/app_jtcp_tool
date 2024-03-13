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
    <div className="fixed inset-x-0 top-16 z-50 mb-4 bg-green-500 px-4 py-2 text-white">
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
