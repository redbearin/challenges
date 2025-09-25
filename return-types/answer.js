arrayValuesTypes = arr => JSON.stringify(arr.map((ele) => typeof ele));

const arr = [1, 2, "null", []];

document.getElementById('ans').textContent = arrayValuesTypes(arr);