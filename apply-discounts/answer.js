getDiscounts = (arr, per) => {
  const dec = +per.slice(0,-1)/100;
  return JSON.stringify(arr.map((ele) => dec * ele));
}

const arr = [2, 4, 6, 11];

const per = "50%";

document.getElementById('ans').textContent = getDiscounts(arr, per);