tidyBooks = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].trim().split(' - '));
  }
  return JSON.stringify(newArr);
}

const arr = [
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
];

document.getElementById('ans').textContent = tidyBooks(arr);