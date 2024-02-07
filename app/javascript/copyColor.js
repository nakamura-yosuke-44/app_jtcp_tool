import addFlashMessage from './components/Commmon/addFlashMessage';

function copyColor(nodeId) {
  const node = document.getElementById(nodeId);
  const colorCode = node.getAttribute('data');

  function colorToClip() {
    navigator.clipboard.writeText(colorCode)
      .then(() => {
        addFlashMessage(nodeId, 'コピーしました');
      })
      .catch((e) => {
        console.error('エラー:', e.message || e);
        alert('エラー');
      });
  }

  node.addEventListener('click', colorToClip);
}

export default copyColor;
