import React, { useState, useMemo } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { IoMdSearch } from 'react-icons/io';
import { IconContext } from 'react-icons';

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function SearchForm({ setIndexColors }) {
  const [inputValue, setInputValue] = useState('');
  const [colorNameArr, setColorNameArr] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const iconSize = '26px';
  const iconContextValue = useMemo(() => ({ size: iconSize }), [iconSize]);

  const handleSearch = async (keyword) => {
    try {
      setInputValue(keyword);
      const response = await axios.get('/search', { params: { keyword } });
      const searchResult = response.data;
      const colorNames = searchResult.map((color) => ({ id: color.id, name: color.name }));
      setColorNameArr(colorNames);
      setIndexColors(searchResult);
    } catch (error) {
      console.error('エラー:', error.message || error);
      alert('エラー');
    }
  };
  return (
    <div className="container mx-auto relative h-1 mt-4 mb-12">
      <input
        id="search_form"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => {
          const keyword = e.target.value;
          handleSearch(keyword);
          setIsFocus(keyword.length > 0);
        }}
        onBlur={() => setTimeout(() => { setIsFocus(false); }, 200)} // onClickのhandleSearchを先に処理させる
        className="border border-[#0d0015] pl-8 w-30 absolute"
        placeholder="色名で検索"
      />
      <IconContext.Provider value={iconContextValue}>
        <span className="absolute">
          <IoMdSearch />
        </span>
      </IconContext.Provider>
      {isFocus && colorNameArr.length > 0 && (
        <span id="autocomplete" className="menu overflow-auto left-[212px] h-40 w-40 bg-white z-50 border absolute">
          <ul>
            {colorNameArr.map((colorName) => (
              <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
                key={`search_${colorName.id}`}
                className="hover:bg-gray-200 mb-3"
                onClick={
                  () => {
                    handleSearch(colorName.name);
                    setIsFocus(false);
                  }
                }
              >
                {colorName.name}
              </li>
            ))}
          </ul>
        </span>
      )}
    </div>
  );
}

SearchForm.propTypes = {
  setIndexColors: PropTypes.func.isRequired,
};

export default SearchForm;
