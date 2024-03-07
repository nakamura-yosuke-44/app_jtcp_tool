import React from 'react';
import PropTypes from 'prop-types';
import ColorsCard from './ColorsCard';

function FavoriteColors({ colors, favorites, login }) {
  const colorComponents = colors.map((color, index) => {
    const favorite = favorites.find((f) => f.color_id === color.id);
    return <ColorsCard key={color.id} color={color} index={index} favoriteId={favorite.id} login={login} />;
  });

  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 bg-white">
      { colorComponents }
    </div>
  );
}

FavoriteColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    kana: PropTypes.string,
    code: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  })),
  favorites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  })),
  login: PropTypes.bool,
};

FavoriteColors.defaultProps = {
  colors: [],
  favorites: [],
  login: false,
};

export default FavoriteColors;
