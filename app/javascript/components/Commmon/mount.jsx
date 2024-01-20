import React from 'react';
import { createRoot } from 'react-dom/client';

const mount = (Component, mountNodeId) => {
  const mountNode = document.getElementById(mountNodeId);

  if (mountNode) {
    const propsData = mountNode?.getAttribute("data");
    
    if (propsData) {
      const props = JSON.parse(propsData);
      createRoot(mountNode).render(<Component {...props} />);
    } else {
      //console.error(`Data attribute is missing:${Component.name}`);
      createRoot(mountNode).render(<Component />);
    }
  } else {
    console.error(`ID ${mountNodeId} not found.`);
  }
};

export default mount;