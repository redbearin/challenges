findDifference = (cub1, cub2) => Math.abs(cub1.reduce((acc, val) => acc * val, 1) - cub2.reduce((acc, val) => acc * val, 1));
const cub1 = [ 9, 22, 18 ];
const cub2 = [ 16, 24, 10 ];

document.getElementById('ans').textContent = findDifference(cub1, cub2);