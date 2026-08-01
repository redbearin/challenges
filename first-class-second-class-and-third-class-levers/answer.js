determineLever = arr => {
  if (arr[0] === "f") {
    return "third class lever";
  }
  if (arr[0] === "e") { 
    if (arr[1] === "l") {
      return "second class lever";
    }
    return "first class lever";
  }
}

const arr = ["f", "e", "l"];

document.getElementById('ans').textContent = determineLever(arr);