pingPong = (arr, win) => {
  let len;
  win? 
    len = arr.length * 2 :
    len = arr.length * 2 - 1;

  const newArr = Array(len).fill('Ping!');

  for (let i = 1; i < newArr.length; i += 2) {
    newArr[i] = "Pong!";
  }
  return JSON.stringify(newArr);
}

const arr = ["Ping!", "Ping!", "Ping!"];
const win = true;

document.getElementById('ans').textContent = pingPong(arr, win);