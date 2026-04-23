canForm = arr => {
  const long = arr.sort((a,b) => b.length - a.length)[0].split('');
  let arrCp;
  for (let i = 1; i < arr.length; i++) {
    arrCp = [...long];
    for (let j = 0; j < arr[i].length; j++) {
      if (arrCp.indexOf(arr[i][j]) >= 0) {
        arrCp[arrCp.indexOf(arr[i][j])] = '*';
      }
      else {
        return false;
      }
    }
  }
  return true;
}

const arr = ["may", "master", "same", "reams"];

document.getElementById('ans').textContent = canForm(arr);