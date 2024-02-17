import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { IoMdSearch } from "react-icons/io";
import { IconContext } from 'react-icons'

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

function SearchForm({ setIndexColors }) {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async (e) => {
    try {
      const newInputValue = e.target.value;
      setInputValue(newInputValue);
      const response = await axios.get('/search', { params: { keyword: newInputValue } });
      setIndexColors(response.data);
    } catch (error) {
      console.error('エラー:', error.message || error);
      alert('エラー');
    }
  };
  return (
    <div className='container mx-auto text-right'>
      <span className='relative'>
        <input type="text" value={inputValue} onChange={handleSearch} className="border border-[#0d0015] pl-8" placeholder='色名で検索' />
        <IconContext.Provider value={{ size: '26px' }}>
          <span className='absolute left-0'>
            <IoMdSearch />
          </span>
        </IconContext.Provider>
      </span>
    </div>
  );
}

SearchForm.propTypes = {
  setIndexColors: PropTypes.func.isRequired,
};

export default SearchForm;
