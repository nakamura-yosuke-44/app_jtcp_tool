// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import mount from './components/Commmon/mount';
import MenuIcon from './components/Header/MenuIcon';

document.addEventListener('turbo:load', () => {
  mount(MenuIcon, 'menu-icon');
});

/*
document.addEventListener('turbo:load', ()=>{
  const colorLength = getColorLength();
  for (let i = 1; i <= colorLength; i++ ) {
    mount(Favorite, `favorite_${i}`);
  };

  mount(MenuIcon, 'menu-icon');
  mount(MailIcon, 'f_mail');

  for (let i = 1; i <= colorLength; i++ ) {
    copyColor(`color_${i}`);
  };
});
*/
