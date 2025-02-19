charCount = str => {
  const ltrArr = str.toLowerCase().replace(/[^a-z]/g, "").split('').sort();
  const counts = {};
  for (let i = 0; i < ltrArr.length; i++) {
    if (counts[ltrArr[i]]) {
      counts[ltrArr[i]] += 1
    }
    else {
      counts[ltrArr[i]] = 1;
    }
  }
  return JSON.stringify(counts).replace(/,/g, ' ').slice(1,-1).replace(/["]/g, '');
}

const str = "Hello world!";

document.getElementById('ans').textContent = charCount(str);