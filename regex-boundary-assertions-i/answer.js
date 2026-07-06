isJS = path => {
	return /\b(.jsx|.js)\b/.test(path);
}

const path = "/users/user.jsx";

document.getElementById('ans').textContent = isJS(path);