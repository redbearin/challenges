firstArg = (...nums) => nums.length ? nums[0] : 'undefined';

lastArg= (...nums) => nums.length ? nums[nums.length -1]: 'undefined';

document.getElementById('ans').textContent = firstArg(1);
document.getElementById('ans1').textContent = lastArg();