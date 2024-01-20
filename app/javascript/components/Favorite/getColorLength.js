const getColorLength = () => {
  const element = document?.getElementById("colorLength");

  if (element) {
    const propsData = element?.getAttribute("data");
    
    if (propsData) {
      const props = JSON.parse(propsData);
      const { colorLength } = props;
      return colorLength;
    } else {
      console.error("Data attribute is missing.");
    }
  } else {
    // console.error(`DOM node with ID colorLength not found.`);
    return;
  }
};

export default getColorLength;