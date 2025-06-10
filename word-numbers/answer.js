word = str => {
  const num = {"one":	1, "two":	2, "three":	3, "four":	4, "five":	5, "six":	6, "seven": 7,"eight": 8, "nine":	9, "zero":	0};
  return num[str];
}

const str = "one";

document.getElementById('ans').textContent = word(str);
