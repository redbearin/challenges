emotify = str => {
  const strArr = str.split(' ');
  let emotives = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P'
  }
  return 'Make me ' + emotives[strArr[2]];
}

const str = "Make me smile";

document.getElementById('ans').textContent = emotify(str);