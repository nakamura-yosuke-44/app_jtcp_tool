// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import mount from './components/Commmon/mount';
import MenuIcon from './components/Header/MenuIcon';

document.addEventListener('turbo:load', () => {
  mount(MenuIcon, 'menu-icon');
});
