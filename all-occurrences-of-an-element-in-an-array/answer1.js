getIndices = (arr, eleToMatch) => {
  return JSON.stringify(arr.flatMap((ele, idx) => ele === eleToMatch ? [idx] : []));
}

const arr = ["a", "a", "b", "a", "b", "a"];
const eleToMatch = "a";

document.getElementById('ans').textContent = getIndices(arr, eleToMatch);