import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import FlashMessage from './FlashMessage';
import axios from 'axios';

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const Favorite = ({ colorId, favoriteId} ) => {
  const [id, setId] = useState(favoriteId);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage ] = useState(false);

  const clicked = async() => {
    if (id == null) {
      const response = await axios.post('/favorites', { color_id: colorId });
      const { data: { id = null} } = response;
      id && setId(id);
      setMessage('追加しました');
      setShowMessage(true);
    } else {
      await axios.delete(`/favorites/${id}`);
      setId(null);
      setMessage('お気に入りから削除しました');
      setShowMessage(true);
    }
  };

  return (
    <>
      {id ? (
        <>
          <FcLike key={`like-${id}`} onClick={clicked} />
          <FlashMessage message= {message} showMessage={showMessage} setShowMessage={setShowMessage} />
        </>
      ) : (
        <>
          <FcLikePlaceholder key={`unlike-${id}`} onClick={clicked} />
          <FlashMessage message= {message} showMessage={showMessage} setShowMessage={setShowMessage} />
        </>
      )}
    </>
  );
};

export default Favorite;
