realType = value => {
  let type = typeof(value);
  if (type === 'object') {
    const objStr = Object.prototype.toString.call(value);
    const arr = objStr.split(' ');
    return arr[1].toLowerCase().slice(0,-1);
  }
	return typeof(value);
}

const value = new RegExp();

document.getElementById('ans').textContent = realType(value);