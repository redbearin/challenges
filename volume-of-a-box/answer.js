volumeOfBox = dimen => dimen.width * dimen.length * dimen.height;

const dimen = { width: 2, length: 5, height: 1 };

document.getElementById('ans').textContent = volumeOfBox(dimen);