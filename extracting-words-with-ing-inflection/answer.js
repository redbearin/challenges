ingExtractor = str => {
  const strArr = str.split(' ');
  const ingArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > 4 && 
        (/[aeiou]/i.test(strArr[i].slice(0, -3))) && 
        strArr[i].slice(-3).toLowerCase() === 'ing') {
      ingArr.push(strArr[i]);
    }
  }
  return JSON.stringify(ingArr);
}

const str = "coming bringing Letting sing";

document.getElementById('ans').textContent = ingExtractor(str);