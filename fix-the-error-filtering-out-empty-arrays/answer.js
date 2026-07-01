removeEmptyArrays = arr => JSON.stringify(arr.filter(sub => sub.length > 0));

const arr = ["a", "b", []];

document.getElementById('ans').textContent = removeEmptyArrays(arr);