doesBrickFit = (s1, s2, s3, h1, h2) => {
  if (s1 <= h1 && (s2 <= h2 || s3 <= h2)) {
    return true;
  }
  if (s2 <= h1 && (s1 <= h2 || s3 <= h2)) {
    return true;
  }
  if (s3 <= h1 && (s1 <= h2 || s2 <= h2)) {
    return true;
  }  
  if (s1 <= h2 && (s2 <= h1|| s3 <= h1)) {
    return true;
  }
  if (s2 <= h2 && (s1 <= h1 || s3 <= h1)) {
    return true;
  }
  if (s3 <= h2 && (s1 <= h1 || s2 <= h1)) {
    return true;
  }  
  return false;
}

const s1 = 1;
const s2 = 2;
const s3 = 2;
const h1 = 1;
const h2 = 1;

document.getElementById('ans').textContent = doesBrickFit(s1, s2, s3, h1, h2);