import React, { useState, useEffect, createRoot } from 'react'; 
import mount from './components/Commmon/mount';
import getColorLength from './components/Favorite/getColorLength';
import Favorite from './components/Favorite/Favorite';
import copyColor from './copyColor';

document.addEventListener('turbo:load', ()=>{
  const colorLength = getColorLength();
  for (let i = 1; i <= colorLength; i++ ) {
    mount(Favorite, `favorite_${i}`);
  };

  for (let i = 1; i <= colorLength; i++ ) {
    copyColor(`color_${i}`);
  };
});