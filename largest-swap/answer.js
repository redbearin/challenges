largestSwap = num => {
  strNum = num.toString();
  return +strNum[1] > strNum[0] ?
  false :
  true;
}

const num = 53;

document.getElementById('ans').textContent = largestSwap(num);