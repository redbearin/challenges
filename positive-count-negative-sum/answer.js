countPosSumNeg = arr => {
	if (!arr.length) {
		return [];
	}
  let posCt = 0;
  let negSum = 0;
  for (let i =0; i < arr.length; i++) {
    arr[i] <= 0 ?
    negSum += arr[i] :
    posCt++;
  }
  return [posCt, negSum];
}

const arr = [92, 6, 73, -77, 81, -90, 99, 8, -85, 34];

document.getElementById('ans').textContent = countPosSumNeg(arr);