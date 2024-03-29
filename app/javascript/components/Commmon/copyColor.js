import addFlashMessage from './addFlashMessage';

function copyColor(colorCode) {
  navigator.clipboard.writeText(colorCode)
    .then(() => {
      addFlashMessage('コピーしました', 'success');
    })
    .catch((error) => {
      console.error('エラー:', error.message || error);
      alert('エラー');
    });
}

export default copyColor;
