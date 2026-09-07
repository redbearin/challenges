sortByLast = str => {
  const strArr = str.split(' ');
  strArr.sort((a,b) => a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0));
  return strArr.join(' ');
}

const str = "sample partner autonomy swallow trend";

document.getElementById('ans').textContent = sortByLast(str);