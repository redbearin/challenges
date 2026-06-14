minSwaps = str => {
  let count0Start = 0;
  let count1Start = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      str[i] === '1' ? count1Start++ : count0Start++;
    }
    else {
      str[i] === '1' ? count0Start++ : count1Start++;
    }
  }
  return count0Start < count1Start ? count0Start : count1Start;
}

const str = "10010";

document.getElementById('ans').textContent = minSwaps(str);