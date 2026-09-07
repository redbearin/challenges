secret = str => {
  const arr = str.split('*');
  return ("<" + arr[0] + ">" + "</" + arr[0] + ">").repeat(arr[1]);
}

const str = "div*2";

document.getElementById('ans').textContent = secret(str);