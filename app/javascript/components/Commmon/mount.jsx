import React from 'react';
import { createRoot } from 'react-dom/client';

function mount(Component, mountNodeId) {
  const mountNode = document.getElementById(mountNodeId);

  if (mountNode) {
    const propsData = mountNode?.getAttribute('data');
    if (propsData) {
      const props = JSON.parse(propsData);
      createRoot(mountNode).render(<Component {...props} />);
    } else {
      console.log(`Data attribute is missing:${Component.name}`);
      createRoot(mountNode).render(<Component />);
    }
  } else {
    console.log(`ID:${mountNodeId} not found.`);
  }
}

export default mount;
