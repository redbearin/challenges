validateSubsets = (subsets, set) => {
  return [... new Set(subsets.flat(Infinity))].join('') === 
         set.flat().join('')?
         true:
         false;
}


const subsets = [[1, 2, 3], [2], [3], []];
const set = [1, 2, 3];

document.getElementById('ans').textContent = validateSubsets(subsets, set);