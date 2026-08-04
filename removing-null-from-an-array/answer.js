removeNull = arr => JSON.stringify(arr.filter(ele => ele !== null));

const arr = ["a", null, "b", null];

document.getElementById('ans').textContent = removeNull(arr);