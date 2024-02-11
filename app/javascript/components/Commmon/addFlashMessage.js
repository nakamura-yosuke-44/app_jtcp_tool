const removeFlashMessage = () => {
  const node = document.getElementById('flashMessage');
  node.remove();
};

const addFlashMessage = (id, message) => {
  const node = document.getElementById(id);
  const newDiv = document.createElement('div');
  newDiv.id = 'flashMessage';
  newDiv.className = 'bg-green-500 px-4 py-2 text-white mb-4 fixed top-16 left-0 right-0 z-50';
  newDiv.textContent = message;
  node.appendChild(newDiv);
  setTimeout(removeFlashMessage, 1000);
};

export default addFlashMessage;