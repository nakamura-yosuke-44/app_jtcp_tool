import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import FavoriteColors from './components/Commmon/FavoriteColors';

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

async function favoriteColors () {
  const response = await axios.get('/get_favorites')
  const data = response.data;
  const { colors, favorites, login } = data
  const mountNode = document.getElementById('favorites');
  createRoot(mountNode).render(<FavoriteColors colors={colors} favorites={favorites} login={login} />);
}

favoriteColors();