chooseFuse = (fuses, voltage) => {
	fuses.push(voltage);
	fuses.sort((a,b) => +a.slice(0, -1) - +b.slice(0, -1));
	return fuses[fuses.indexOf(voltage) + 1];
}

const fuses = ["3V", "5V", "12V"]
const voltage = "4.5V";

document.getElementById('ans').textContent = chooseFuse(fuses, voltage)