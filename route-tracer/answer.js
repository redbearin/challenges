routeTracer = (grid, path) => {
  const grid1 = [...grid];
  let str = '';
  let current;
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].includes('@')) {
      current = [i, grid[i].indexOf('@')];
    }
  }
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'l') {
      current = [current[0], current[1] - 1];
    }
    if (path[i] === 'r') {
      current = [current[0], current[1] + 1];
    }
    if (path[i] === 'u') {
      current = [current[0] - 1, current[1]];
    }
    if (path[i] === 'd') {
      current = [current[0] + 1, current[1]];
    }
    if (grid[current[0]][current[1]] !== "-") {
      str += grid[current[0]][current[1]];
    }
    grid1[current[0]][current[1]] = 'x';
  }
  return JSON.stringify({route: grid1, items: str});
}

const grid = [
  ["-", "#", "-", "-"],
  ["$", "#", "@", "&"],
  ["-", "#", "$", "&"],
  ["$", "-", "&", "-"]
];

const path = "lddr";

document.getElementById('ans').textContent = routeTracer(grid, path);

