switcheroo = str => {
  const strArr = str.split(' ');
  const strCl = str.replace(/[^A-Za-z ]/g, '');
  const strClArr = strCl.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strClArr[i].slice(-3) === "nts") {
      strClArr[i] = strClArr[i].slice(0, -3) + "nce";
    }
    else if (strClArr[i].slice(-3) === "nce") {
      strClArr[i] = strClArr[i].slice(0, -3) + "nts";
    }
    // add punctuation
    if (strArr[i].length - strClArr[i].length !== 0) {
      strClArr[i] = strClArr[i] + strArr[i].slice(-(strArr[i].length - strClArr[i].length));
    }
  }
  return strClArr.join(' ');
}

const str = "The elephants in France were chased by ants!";

document.getElementById('ans').textContent= switcheroo(str);