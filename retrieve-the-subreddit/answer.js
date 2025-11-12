subReddit = str => {
  const strArr = str.split('/')
  return strArr[strArr.length - 2];
}

const str = "https://www.reddit.com/r/mildlyinteresting/";

document.getElementById('ans').textContent = subReddit(str);