const splitNCases = (str, cases) => {
  let incLen = str.length / cases;
	const split = [];
  if (!Number.isInteger(incLen)) {
    split.push('Error');
  }
	else {
		let sub;
  	for (let i = 0; i < str.length; i += incLen) {
    	sub = '';
    	for (let j = i; j < i + incLen; j++) {
      	sub += str[j];
    	}
      split.push(sub);
    }
  }
  return JSON.stringify(split);
}

const str = "straighten" ;
const parts = 4;

document.getElementById('ans').textContent = splitNCases(str, parts);