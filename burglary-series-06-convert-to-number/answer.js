convertToNumber = list => {
  for (item in list) {
    list[item] = +list[item];
  }
  return JSON.stringify(list);
}

const list = { piano: "200", tv: "300" };

document.getElementById('ans').textContent = convertToNumber(list);