emphasise = str => {
	if (!str.length) {
		return '';
	}
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
  }
  return strArr.join(' ');
}

const str = "hello world";

document.getElementById('ans').textContent = emphasise(str);