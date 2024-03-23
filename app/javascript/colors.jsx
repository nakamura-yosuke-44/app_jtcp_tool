import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import IndexColors from './components/Commmon/IndexColors';

axios.defaults.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

async function getColors () {
  const response = await axios.get('/get_colors')
  const data = response.data
  const { colors, favorites, login } = data
  const mountNode = document.getElementById('colors');
  createRoot(mountNode).render(<IndexColors colors={colors} favorites={favorites} login={login} />);
}

getColors();
