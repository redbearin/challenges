joinPath = (portion1, portion2) => {
  return portion1.replace('/', "") +
   '/' + 
   portion2.replace('/', "");
}

const portion1 = "portion1";
const portion2 = "portion2";

document.getElementById('ans').textContent = joinPath(portion1, portion2);