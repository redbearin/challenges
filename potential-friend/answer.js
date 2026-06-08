isPotentialFriend = (arr1, arr2) => {
  if (arr1.length === 1 && 
      arr2.length === 1 
      && arr1[0] === arr2[0]) {
    return true;
  }
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      count++;
    }
    if (count === 2) {
      return true;
    }
  }
  return false;
}

const arr1 = ["sports", "music", "chess"]
const arr2 = ["coding", "music", "netflix", "chess"];

document.getElementById('ans').textContent = isPotentialFriend(arr1,arr2);