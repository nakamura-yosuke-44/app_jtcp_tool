// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import "@hotwired/turbo-rails";
import mount from './mount';
import getColorLength from './getColorLength';
import Favorite from './components/Favorite';

const colorLength = getColorLength();
for (let i = 1; i <= colorLength; i++ ) {
  mount(Favorite, `favorite_${i}`);
};