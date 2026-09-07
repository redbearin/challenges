has_bugs = buggy_code => buggy_code ? "sad days" : "it/'s a good day";

const buggy_code = true;

document.getElementById('ans').textContent = has_bugs(buggy_code);