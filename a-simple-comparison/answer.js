simpleComp = (arr1, arr2) => {
	if (arr1 === null || arr2 === null) {
		if (arr1 !== arr2) {
			return false;
		}
		return true;		
	}
	if (!arr1.length || !arr2.length) {
		if (!arr1.length && !arr2.length) {
			return true;
		}
		return false;
	}
  arr1.sort((a,b) => Math.abs(a) - Math.abs(b));
  arr2.sort((a,b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (Math.pow(arr1[i],2) !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const arr1 = [4, 4];
const arr2 = [1, 31];

document.getElementById('ans').textContent = simpleComp(arr1, arr2);