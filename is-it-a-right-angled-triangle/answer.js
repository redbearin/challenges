isRightAngle = (arr, part) => {
  if (arr.length <= 1) {
    return true;
  }
  if (arr.length === 2) {
    if (part === 'side') {
      if (arr[0] !== arr[1]) {
        return true;
      }
    }
    else {
      if (180 - arr[0] - arr[1] === 90) {
        return true;
      }
    }
    return false;
  }
  if (arr.length === 3) {
    if (part === 'side') {
      arr.sort((a,b) => a-b);
      if (arr[0]**2 + arr[1]**2 === arr[2]**2) {
        return true;
      }
    }
    else {
      if (arr.includes(90) && arr[0] + arr[1] + arr[2] === 180) {
        return true;
      }
    }
  }
  return false;
}

const arr = [4,5];
const part = "side";

document.getElementById('ans').textContent = isRightAngle(arr, part);