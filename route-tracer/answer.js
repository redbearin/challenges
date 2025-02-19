routeTracer = (grid, route) => {
  let currentPos = [];
  let index;
  let items = '';
  // the starting position
  // based on the location of @
  for (let i = 0; i < grid.length; i++) {
    index = grid[i].findIndex(element => element === '@'
    );
    if (index !== -1)
      currentPos.push(i, index);
  }
  // go through each element in route
  // and find the new location
  for (let i = 0; i < route.length; i++) {
    if (route[i] === 'l') {
      loc = grid[currentPos[0]][currentPos[1] - 1];
      if (loc === '&' || loc === '#' || loc === '$')
        items += grid[currentPos[0]][currentPos[1] - 1];
      grid[currentPos[0]][currentPos[1] - 1] = 'x';
      currentPos[1] = currentPos[1] - 1;
    }
    if (route[i] === 'r') {
      loc = grid[currentPos[0]][currentPos[1] + 1];
      if (loc === '&' || loc === '#' || loc === '$')
        items += grid[currentPos[0]][currentPos[1] + 1];
      grid[currentPos[0]][currentPos[1] + 1] = 'x';
      currentPos[1] = currentPos[1] + 1;
    }
    if (route[i] === 'u') {
      loc = grid[currentPos[0] - 1][currentPos[1]];
      if (loc === '&' || loc === '#' || loc === '$')
        items += grid[currentPos[0] - 1][currentPos[1]];
      grid[currentPos[0] - 1][currentPos[1]]= 'x';
      currentPos[0] = currentPos[0] - 1;
    }
    if (route[i] === 'd')  {
      loc = grid[currentPos[0] + 1][currentPos[1]];
      if (loc === '&' || loc === '#' || loc === '$')
        items += grid[currentPos[0] + 1][currentPos[1]];
      grid[currentPos[0] + 1][currentPos[1]]= 'x';
      currentPos[0] = currentPos[0] + 1;
    }
  }
  return JSON.stringify({grid, items});
}

const grid = [
  ["-", "#", "-", "-"],
  ["$", "#", "@", "&"],
  ["-", "#", "$", "&"],
  ["$", "-", "&", "-"]
];
const route = "lddr";

document.getElementById('ans').textContent = routeTracer (grid, route);
