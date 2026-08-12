negativeSum = str => {
  const numArr = str.split(/[^-1-9]/g).map(Number);
  return numArr.reduce((acc, val) => {
      if (val < 0) {
        return acc + val;
      }
      return acc;
    },
    0
  );
}

const str = "-12 13%14&-11";

document.getElementById('ans').textContent = negativeSum(str);