letterCheck = arr => {
  let firstArr = arr[0].toLowerCase().split('');
  arr[1] = arr[1].toLowerCase();
  for (let i = 0; i < arr[1].length; i++) {
    if (!firstArr.includes(arr[1][i])) {
      return false;
    }
  }
  return true;
}

const arr = ["trances", "nectar"];

document.getElementById('ans').textContent = letterCheck(["trances", "nectar"]);