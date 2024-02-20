import React from 'react';
import PropTypes from 'prop-types';
import Favorite from '../Favorite/Favorite';
import copyColor from './copyColor';

function ColorsCard({
  color, index, favoriteId, login,
}) {
  return (
    <div className="flex border-solid border-2">
      <div
        id={`color_${index}`}
        className="rounded-full h-20 w-20 border shrink-0"
        style={{ backgroundColor: color.code }}
        onClick={(e) => copyColor(e, color.code)}
      />
      <div className="flex-grow relative flex">
        {login && (
          <div id={`favorite_${index}`} className="top-0 right-0 absolute z-40">
            <Favorite colorId={color.id} favoriteId={favoriteId} />
          </div>
        )}
        <div className="flex items-center flex-grow" style={{ backgroundColor: color.code }}>
          <p className="text-sm bg-white flex-grow px-4 flex items-center justify-center">
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
