const charAtPos = (input, type) => {
  let start, final;
  if(type === 'even')
    start = 2;
  else
    start = 1;

  if (Array.isArray(input)) {
    final = [];
    for (let i = input.length - start; i >= 0; i -= 2) {
      final.unshift(input[i]);
    }
  }
  else {
    final = '';
    for (let i = input.length - start; i >= 0; i -= 2) {
      final = input[i] + final;
    }
  }
  return JSON.stringify(final);
};

const input = [")", "(", "*", "&", "^", "%", "$", "#", "@", "!"];
const type = "odd";

document.getElementById('ans').textContent = charAtPos(input, type);