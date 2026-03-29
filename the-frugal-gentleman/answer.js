chosenWine = wines => {
  if (!wines.length)
    return null;
  if (wines.length === 1)
    return wines[0].name;
  wines.sort((a,b) => a.price - b.price);
   return wines[1].name;
}

const wines = [];

document.getElementById('ans').textContent = chosenWine(wines);