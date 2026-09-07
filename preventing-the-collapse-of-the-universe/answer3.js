catchZeroDivision = str => !isFinite(eval(str));

const str = "7 / ((7**2) - ((-7)**2))";

document.getElementById('ans').textContent = catchZeroDivision(str);