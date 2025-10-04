isSafeBridge = str => !str.includes(' ');

const str = "####";

document.getElementById('ans').textContent = isSafeBridge(str);