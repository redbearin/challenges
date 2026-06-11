cmsSelector = (arr, str) => {
  if (str === "") {
    return JSON.stringify(arr);
  }
  const newArr = [];
  const regex = new RegExp(str, "i");
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      newArr.push (arr[i]);
    }
  }
  return JSON.stringify(newArr);
}

const arr = ["WordPress", "Joomla", "Drupal"];
const str = "w";

document.getElementById('ans').textContent = cmsSelector(arr, str);