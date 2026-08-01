validStrNumber = str => typeof str != "string" || str.trim() === "" ? false : Number.isFinite(+str);

const str = "3.2";

document.getElementById('ans').textContent = validStrNumber(str);