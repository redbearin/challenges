getBudgets = arr => {
  let sum = 0;
  for (let i =0; i < arr.length; i++) {
    sum += arr[i].budget;
  }
  return sum;
}

const arr = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]
document.getElementById('ans').textContent = getBudgets(arr);