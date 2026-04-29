afterNDays = (days, num) => {
  // num assigned to each day
  const dayNum = {Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday: 6, Saturday: 7};
  // day assigned to each number
  const numDay = {1: 'Sunday', 2: 'Monday', 3: 'Tuesday', 4: 'Wednesday', 5: 'Thursday', 6: 'Friday', 7: 'Saturday'};
  // days after increment
  const newDays = [];
  // increment
  for (let i = 0; i < days.length; i++) {
    // total with increment less than days of week
    if (+dayNum[days[i]] + num <= 7)
      newDays.push(numDay[dayNum[days[i]] + num]);
    // total with increment in a new week
    else 
      newDays.push(numDay[dayNum[days[i]] + num - 7]);
  }
  return JSON.stringify(newDays);
}

const days = ["Monday", "Tuesday", "Friday"];
const num = 1;

document.getElementById('ans').textContent = afterNDays(days, num);