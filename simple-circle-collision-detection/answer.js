isCircleCollision = (c1, c2) => {
  const dist = Math.sqrt((c1[1] - c2[1])*2 + (c1[2] - c2[2])*2);
  return dist <= c1[0] - c2[0] || 
         dist <= c2[0] - c1[0] || 
         dist <= c1[0] + c2[0] ?
  true : 
  false;
}

const c1 = [1, 0, 0]; 
const c2 = [1, 10, 10];

document.getElementById('ans').textContent = isCircleCollision(c1, c2);

