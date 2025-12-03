addEnding = (arr, end) => JSON.stringify(arr.map((ele) => ele + end));

const arr = ["clever", "meek", "hurried", "nice"];
const end = "ly";

document.getElementById('ans').textContent = addEnding(arr, end);