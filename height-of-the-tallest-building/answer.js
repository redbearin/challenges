tallestBuildingHeight = bldgs => {
  for (let i = 0; i < bldgs.length; i++) {
    if (bldgs[i].includes('#')) {
      return (bldgs.length - i) * 20 + 'm';
    }
  }
}


const bldgs = [
  "            ##",
  "            ##",
  "            ##",
  "###   ###   ##",
  "###   ###   ###",
  "###   ###   ###",
  "###   ###   ###"
]

document.getElementById('ans').textContent = tallestBuildingHeight(bldgs);