addParityBit = str => {
  return (str.match(new RegExp("1", "g")) || []).length % 2 ?
    str + 1:
    str + 0;
} 

const str = "0110000";

document.getElementById('ans').textContent = addParityBit(str);