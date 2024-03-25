const removeFlashMessage = () => {
  const node = document.getElementById('flashMessage');
  node.remove();
};

const addFlashMessage = (message,type) => {
  const node = document.getElementById('base');
  const newDiv = document.createElement('div');
  newDiv.id = 'flashMessage';
  let messageType;
  switch (type) {
    case 'success':
      messageType = 'bg-green-500';
    case 'alert':
      messageType = 'bg-red-500';
  }
  const messeageType = type == 'success' ? 'bg-green-500' : 'bg-red-500'
  newDiv.className = `fixed inset-x-0 top-16 z-50 mb-4 ${messeageType}  px-4 py-2 text-white`;
  newDiv.textContent = message;
  node.prepend(newDiv);
  setTimeout(removeFlashMessage, 400);
};

export default addFlashMessage;
