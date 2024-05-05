bugger = num => {
	return num < 10 ? 
         0 : 
         1 + bugger((num + "").split('').reduce((prevVal, curVal)=> prevVal * curVal, 1));
}

const num = 999;

document.getElementById('ans').textContent = bugger(num);