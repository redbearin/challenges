filterDigitLength = (arr, len) => JSON.stringify(arr.filter((ele) => ("" + ele).length === len));

const arr = [88, 232, 4, 9721, 555];
const len = 3;

document.getElementById('ans').textContent = filterDigitLength(arr, len);