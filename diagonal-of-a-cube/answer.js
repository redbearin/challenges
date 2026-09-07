cubeDiagonal = vol => {
  const side = Math.pow(vol, 1/3);
  const diagFace =  Math.sqrt(2 * Math.pow(side, 2));
  return Math.round(Math.pow(Math.pow(side, 2) + Math.pow(diagFace, 2), 1/2) * 100 )/100;
}
const vol = 343;

document.getElementById('ans').textContent = cubeDiagonal(vol);