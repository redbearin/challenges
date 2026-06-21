makeGrlex = arr => {
  return JSON.stringify(arr.sort((a, b) => 
    a.length - b.length || a.localeCompare(b)
  ));
}

const arr = ["cat", "ran", "for", "the", "rat"];

document.getElementById('ans').textContent = makeGrlex(arr);