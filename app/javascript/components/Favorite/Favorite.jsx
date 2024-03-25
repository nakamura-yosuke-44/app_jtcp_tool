import React, { useState } from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import axios from 'axios';
import PropTypes from 'prop-types';
import addFlashMessage from '../Commmon/addFlashMessage';

function Favorite({ colorId, favoriteId }) {
  const [faId, setFaId] = useState(favoriteId);
  const clicked = async () => {
    try {
      if (faId == null) {
        const response = await axios.post('/favorites', { color_id: colorId });
        if (response.data.id == null) {
          throw new Error('リクエストが失敗しました。')
        }
        const { data: { id } } = response;
        setFaId(id);
        addFlashMessage('お気に入りに追加しました', 'success')
      } else {
        await axios.delete(`/favorites/${faId}`);
        setFaId(null);
        addFlashMessage('お気に入りから削除しました', 'success')
      }
    } catch (e) {
      console.error('エラー:', e.message || e);
      alert('エラーが発生しました。もう一度ログインしてください。'
      );
    }
  };

  return (
    <>
      {faId ? (
        <FcLike onClick={clicked} />
      ) : (
        <FcLikePlaceholder onClick={clicked} />
      )}
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
