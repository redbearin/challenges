const danielLikes = name => {
  let charTtl = 0;
  for (let i = 0; i < name.length; i++) {
  	charTtl += name.charCodeAt(i);
  }
  // true if charTtl > 499 and < 600
  // otherwise false
  return (charTtl + '')[0] === '5';
};
const name = "Margo";

document.getElementById('ans').textContent = danielLikes(name);