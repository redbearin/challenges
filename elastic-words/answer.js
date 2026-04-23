elasticize = str => {
  let center = '';
  if (str.length % 2) {
    center = str[Math.floor(str.length/2)].repeat(Math.ceil(str.length/2));
  }
  let front = '';
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    front += str[i].repeat(i + 1);
  }
  let end = '';
  let count = 1;
  for (let i = str.length -1; i >= str.length/2; i--) {
    end = str[i].repeat(count) + end;
    count++;
  }
  return front + center + end;
}

const str = "KAYAK";

document.getElementById('ans').textContent = elasticize(str);

