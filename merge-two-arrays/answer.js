mergeArrays = (arr1, arr2) => {
  let len;
  const combined = [];
  // set length to length of longest arr
  if (arr1.length > arr2.length)
    len = arr1.length;
  else
    len = arr2.length;
  // go element by element and add to combined arr
  // if nothing in an arr add the rest of longer arr
  for (let i = 0; i < len; i++) {
    if (!arr1[i])
      return JSON.stringify(combined.concat(arr2.slice(i)));
    if (!arr2[i])
      return JSON.stringify(combined.concat(arr1.slice(i)));
    else
      combined.push(arr1[i], arr2[i]);
  }
  return JSON.stringify(combined);
}
const arr1 = ["a", "b", "c", "d", "e"];
const arr2 = [1, 2, 3, 4, 5];

document.getElementById('ans').textContent = mergeArrays(arr1, arr2);