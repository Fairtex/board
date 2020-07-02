const changeValue = (sourceArr, changedValue, id, newValue) => {
  const newArr = JSON.parse(localStorage.getItem(sourceArr));
  newArr.find(item => item.id === id)[changedValue] = newValue;
  localStorage.setItem(sourceArr, JSON.stringify(newArr));
  return newArr
}

export default changeValue;