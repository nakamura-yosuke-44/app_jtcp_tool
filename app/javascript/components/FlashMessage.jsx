import React, { useEffect } from 'react';

const useFlashEffect = (showMessage, setShowMessage) => {
  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [showMessage, setShowMessage]);
};

const FlashMessage = ({ message, showMessage, setShowMessage }) => {
  useFlashEffect(showMessage, setShowMessage);

  return (
    <>
      {showMessage ? (
        <div className="bg-green-500 px-4 py-2 rounded-md text-white mb-4 fixed top-0 left-0 right-0 z-50">
          {message}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default FlashMessage;







