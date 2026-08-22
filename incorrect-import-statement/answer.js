fixImport = str => {
  const arr = str.split(' ');
  return arr.slice(2).join(' ') + " " + arr.slice(0, 2).join(' ');
}
const str = "import object from module_name";

document.getElementById('ans').textContent = fixImport(str);