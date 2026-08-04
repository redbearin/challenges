chatroomStatus = arr => {
  let front;
  if(!arr.length) {
    front = "no one";
    console.log(front)
  }
  else if (arr.length === 1)  {
    front = arr[0];
  }
  else if (arr.length === 2) {

    front = arr[0] + " and " + arr[1];
  }
  else {
    front = arr[0] + ", " + arr[1] + " and " + (arr.length - 2) + " more";
  }
  return front + " online";
}

const arr = [];

document.getElementById('ans').textContent = chatroomStatus(arr);