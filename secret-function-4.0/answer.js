secret = str => {
  const strArr = str.split('.');
  if (strArr.length < 2)
    return `<p></p>`;
  else {
    let sub = strArr[1];
    for (let i = 2; i < strArr.length; i++) {
      sub += ' ' + strArr[i];
    }

    return `<p class="` + sub + `"></p>`;

  }
}
const str = "p.four.five";

document.getElementById('ans').textContent = secret(str);