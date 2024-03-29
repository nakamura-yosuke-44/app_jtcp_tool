import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ColorsCard from './ColorsCard';
import SearchForm from './SearchForm';

function IndexColors({ colors, favorites, login }) {
  const [indexColors, setIndexColors] = useState(colors);
  const colorComponents = indexColors.map((color, index) => {
    const favorite = favorites.find((f) => f.color_id === color.id);
    return (
      <ColorsCard
        key={color.id}
        color={color}
        index={index}
        favoriteId={favorite?.id}
        login={login}
      />
    );
  });
  return (
    <>
      <SearchForm setIndexColors={setIndexColors} />
      <div id="color_field" className="container mx-auto mt-8 grid grid-cols-2 gap-4 bg-white md:grid-cols-3 lg:grid-cols-4">
        { colorComponents }
      </div>
    </>
  );
}

IndexColors.propTypes = {
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

IndexColors.defaultProps = {
  colors: [],
  favorites: [],
  login: false,
};

export default IndexColors;
