import addFlashMessage from './addFlashMessage';

function copyColor(e, colorCode) {
  navigator.clipboard.writeText(colorCode)
    .then(() => {
      const nodeId = e.target.id;
      addFlashMessage(nodeId, 'コピーしました');
    })
    .catch((error) => {
      console.error('エラー:', error.message || error);
      alert('エラー');
    });
}

export default copyColor;
