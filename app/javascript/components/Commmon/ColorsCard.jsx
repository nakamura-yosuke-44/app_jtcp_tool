import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite/Favorite';
import copyColor from './copyColor';

function ColorsCard({
  color, index, favoriteId, login,
}) {
  return (
    <div className="flex border-2 border-solid">
      <div
        id={`color_${color.id}`}
        className="h-20 w-20 shrink-0 rounded-full border"
        style={{ backgroundColor: color.code }}
        onClick={(e) => copyColor(e, color.code)}
      />
      <div className="relative flex grow">
        {login && (
          <div id={`favorite_${index}`} className="absolute right-0 top-0 z-40">
            <Favorite colorId={color.id} favoriteId={favoriteId} />
          </div>
        )}
        <div className="flex grow items-center" style={{ backgroundColor: color.code }}>
          <p className="flex grow items-center justify-center bg-white px-4 text-sm">
            {`${color.name}(${color.kana})`}
          </p>
        </div>
      </div>
    </div>
  );
}

ColorsCard.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    kana: PropTypes.string,
    code: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }),
  index: PropTypes.number,
  favoriteId: PropTypes.number,
  login: PropTypes.bool,
};

ColorsCard.defaultProps = {
  color: null,
  index: null,
  favoriteId: null,
  login: false,
};

export default ColorsCard;
