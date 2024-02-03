import addFlashMessage from "./components/Commmon/addFlashMessage";

const copyColor = (nodeId) => {
  const node = document.getElementById(nodeId);
  const colorCode = node.getAttribute("data");
  
  const colorToClip = () => {
    navigator.clipboard.writeText(colorCode)
      .then(() => {
        addFlashMessage(nodeId, "コピーしました");
      })
      .catch((error) => {
        console.error("コピーに失敗しました", error);
      });
  };

  node.addEventListener("click", colorToClip);
};

export default copyColor;
