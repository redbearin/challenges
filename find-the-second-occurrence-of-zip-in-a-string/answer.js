findZip = str => {
  const indices = [...str.matchAll(new RegExp('zip', 'g'))].map(ele => ele.index);
  return indices[1] === undefined ?
  - 1 :
  indices[1];
}

const str = "all zip files are zipped";

document.getElementById('ans').textContent = findZip(str);