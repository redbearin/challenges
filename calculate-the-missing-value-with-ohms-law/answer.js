ohmsLaw = (v, r, i) => {
  if (v === "" && i === "" || 
			v === "" && r === "" || 
			r === "" && i === "" || 
			v !== "" && r !== "" && i !== "") {
    return "Invalid";
  }
  if (v === "") {
    return Math.round(r * i * 100)/100;
  }
  if (r === "") {
    return Math.round(v / i * 100)/100;
  }
  if (i === "") {
    return Math.round(v / r * 100)/100;
  }
}

const v = 12;
const r = 200;
const i = "";

document.getElementById('ans').textContent =  ohmsLaw(v, r, i);

