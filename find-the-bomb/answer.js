bomb = str => {
  str = str.toLowerCase();
  if (/bomb/g.test(str)) {
    return "Duck!!!"
  }
  return "There is no bomb, relax."
}

const str = "Hey, did you think there is a bomb?";

document.getElementById('ans').textContent = bomb(str);