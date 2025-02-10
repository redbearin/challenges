neutralise = (str1, str2) => {
  const newArr = [];
  for (let i = 0 ; i < str1.length; i++) {
    str1[i] === str2[i] ?
      newArr.push(str1[i]) :
      newArr.push(0);
  }
  return JSON.stringify(newArr);
}

const str1 = "--++--";
const str2 = "++--++";

document.getElementById('ans').textContent = neutralise(str1, str2);