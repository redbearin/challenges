linesAreParallel = (l1, l2) => {
 return -l1[0]/l1[1] === -l2[0]/l2[1];
}

const l1 = [1, 2, 3];
const l2 = [1, 2, 4];

document.getElementById('ans').textContent = linesAreParallel(l1, l2);