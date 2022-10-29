shhh = str => {
  const strArr = str.split(' ');
  let final = '"';
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      final += strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase();
    }
    else {
      final += strArr[i].toLowerCase();
    }

    if (i !== strArr.length - 1)
      final += ' ';
  }
  return final + '"' +  ", whispered Edabit.";
}

const str = "HI THERE!";

document.getElementById('ans').textContent = shhh(str);