greaterThanOne = str => {
  const arr = str.split('/');
  return arr[0]/arr[1] > 1 ?
  true :
  false;
}
const str = "7/4";

document.getElementById('ans').textContent = greaterThanOne(str);