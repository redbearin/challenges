check = list => {
  let decreasing = false;
  // first two numbers are the same
  if (list[0] === list[1])
    return 'neither';
  if (list[0] > list[1])
    decreasing = true;
  // decreasing pattern
  if (decreasing) {
    for (let i = 2; i < list.length; i++) {
      // changes to increasing or the same
      if (list[i] >= list[i - 1])
        return neither;
    }
  }
  // increasing pattern
  else {
    for (let i = 2; i < list.length; i++) {
      // changes to decreasing or the same
      if (list[i] <= list[i - 1])
        return 'neither';
    }
  }
  // all decreasing
  if (decreasing)
    return 'decreasing';
  // all increasing
  return 'increasing';
}
const list = [1, 2, 3];

document.getElementById('ans').textContent = check(list);