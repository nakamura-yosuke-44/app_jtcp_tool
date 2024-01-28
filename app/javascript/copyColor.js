const copyColor = (nodeId) => {
  const colorToClip = () => {
    const node = document.getElementById(nodeId);
    const colorCode = node.getAttribute("data");
    console.log(colorCode);

    navigator.clipboard.writeText(colorCode)
      .then(() => {
        alert("コピーしました");
      })
      .catch((error) => {
        console.error("コピーに失敗しました", error);
      });
  };

  document.querySelector(`#${nodeId}`).addEventListener("click", colorToClip);
};

export default copyColor;
