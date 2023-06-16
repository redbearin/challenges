numberLength = num => { 
  console.log(num)
  return num.length;
}

let val = 777777777777777777777777777777;

document.getElementById('ans').textContent = numberLength(val.toString()));