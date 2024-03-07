import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import axios from 'axios';
import PropTypes from 'prop-types';
import FlashMessage from '../FlashMessage/FlashMessage';

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function Favorite({ colorId, favoriteId }) {
  const [faId, setFaId] = useState(favoriteId);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const clicked = async () => {
    try {
      if (faId == null) {
        const response = await axios.post('/favorites', { color_id: colorId });
        const { data: { id } } = response;
        setFaId(id);
        setMessage('お気に入りに追加しました');
        setShowMessage(true);
      } else {
        await axios.delete(`/favorites/${faId}`);
        setFaId(null);
        setMessage('お気に入りから削除しました');
        setShowMessage(true);
      }
    } catch (e) {
      console.error('エラー:', e.message || e);
      alert('エラーが発生しました。再度ログインし直してください。');
    }
  };

  return (
    <>
      {faId ? (
        <FcLike onClick={clicked} />
      ) : (
        <FcLikePlaceholder onClick={clicked} />
      )}
      <FlashMessage message={message} showMessage={showMessage} setShowMessage={setShowMessage} />
    </>
  );
}

Favorite.propTypes = {
  colorId: PropTypes.number,
  favoriteId: PropTypes.number,
};

Favorite.defaultProps = {
  colorId: null,
  favoriteId: null,
};

export default Favorite;
