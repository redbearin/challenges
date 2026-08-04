deepCount = (arr = []) => {
   return arr.reduce((acc, val) => {
      return acc + (Array.isArray(val) ? deepCount(val) : 0);
   }, arr.length);
};

const arr = ["a", "b", ["c", "d", ["e"]]];

document.getElementById('ans').textContent = deepCount(arr);