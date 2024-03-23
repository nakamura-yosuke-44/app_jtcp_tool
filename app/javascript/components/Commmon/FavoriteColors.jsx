import React from 'react';
import PropTypes from 'prop-types';
import ColorsCard from './ColorsCard';

function FavoriteColors({ colors, favorites, login }) {
  const colorComponents = colors.map((color, index) => {
    const favorite = favorites.find((f) => f.color_id === color.id);
    return (
      <ColorsCard
        key={color.id}
        color={color}
        index={index}
        favoriteId={favorite.id}
        login={login}
      />
    );
  });

  return (
    <>
      {colors.length > 0 ? (
         <div className="container mx-auto mt-8 grid grid-cols-2 gap-4 bg-white md:grid-cols-3 lg:grid-cols-4">
           { colorComponents }
         </div>
      ) : (
        <p>お気に入りはありません</p>
      )}
    </>
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
