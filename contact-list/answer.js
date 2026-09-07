sortContacts = (arr, sortType) => {
  if (arr === null || arr === undefined) {
    return JSON.stringify([]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(' ');
  }
  sortType === 'ASC' ?
  arr.sort((a, b) => a[1].localeCompare(b[1])):
  arr.sort((a, b) => b[1].localeCompare(a[1]));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].join(' ');
  }
  return JSON.stringify(arr);
}

const arr = [
  "Leonhard Euler",
  "Paul Erdos",
  "Carl Gauss"
];

const sortType = "DESC";

document.getElementById('ans').textContent = sortContacts(arr, sortType);