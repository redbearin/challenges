describeNum = num => {
  let str = "The most ";
  if (num % 1 === 0) {
    str += "brilliant ";
  }
  if (num % 2 === 0) {
    str += "exciting ";
  }
  if (num % 3 === 0) {
    str += "fantastic ";
  }
  if (num % 4 === 0) {
    str += "virtuous ";
  }
  if (num % 5 === 0) {
    str += "heart-warming ";
  }
  if (num % 6 === 0) {
    str += "tear-jerking " ;
  }
  if (num % 7 === 0) {
    str += "beautiful ";
  }
  if (num % 8 === 0) {
    str += "exhilarating " ;
  }
  if (num % 9 === 0) {
    str += "emotional ";
  }
  if (num % 10 === 0) {
    str += "inspiring ";
  }
  return str +  "number is " + num + "!";
}

const num = 21;

document.getElementById('ans').textContent = describeNum(num);