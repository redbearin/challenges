const sortByCharacter = (arr, position) => {
  arr.sort((a, b) => {
    if (a[position - 1] > b[position -1])
      return 1;
    if (a[position -1] < b[position - 1])
      return -1;
    return 0;
  });
  return JSON.stringify(arr);
};

const arr = ["mate", "team", "bade"];
const position = 3;

document.getElementById('ans').textContent = sortByCharacter(arr, position);