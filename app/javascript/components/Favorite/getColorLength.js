function getColorLength() {
  const element = document?.getElementById('colorLength');

  if (element) {
    const propsData = element?.getAttribute('data');
    try {
      const props = JSON.parse(propsData);
      const { colorLength } = props;
      return colorLength;
    } catch (e) {
      console.error('JSONの解析中にエラーが発生しました:', e.message || e);
      alert('エラー');
      return undefined;
    }
  } else {
    console.error('エラー: ID "colorLength" が見つかりません');
    return undefined;
  }
}

export default getColorLength;
