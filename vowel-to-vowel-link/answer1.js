vowelLinks = str => {
	return /[aeiou] [aeiou]/.test(str);
}

const str = "Creative Environment";

document.getElementById('ans').textContent = vowelLinks(str);