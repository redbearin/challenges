isAnagram = (s1, s2) => {
	return s1.toLowerCase().split('').sort().join('') === 
         s2.toLowerCase().split('').sort().join('') ?
		true :
	  false;
}
const s1 = "cristian";
const s2 = "Cristina";

document.getElementById('ans').textContent = isAnagram("cristian", "Cristina")