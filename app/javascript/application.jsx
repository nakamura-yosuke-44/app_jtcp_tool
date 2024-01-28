// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import "@hotwired/turbo-rails";
import mount from './components/Commmon/mount';
import getColorLength from './components/Favorite/getColorLength';
import Favorite from './components/Favorite/Favorite';
import MenuIcon from './components/Header/MenuIcon';
import copyColor from './copyColor';


document.addEventListener('turbo:load', ()=>{
  const colorLength = getColorLength();
  for (let i = 1; i <= colorLength; i++ ) {
    mount(Favorite, `favorite_${i}`);
  };

  mount(MenuIcon, 'menu-icon');

  for (let i = 1; i <= colorLength; i++ ) {
    copyColor(`color_${i}`);
  };
});
