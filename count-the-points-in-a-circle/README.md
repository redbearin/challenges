Count the total number of coordinates on a two-dimensional grid that are inside a given circle. The function has four parameters: the points (provided as a list of objects), the circle's center x coordinate, the circle's center y coordinate, and the circle's radius. For example:

Examples
pointsInCircle([
  { x: 0, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 5 },
  { x: 10, y: 10 }
], 0, 0, 5) ➞ 2

Notes
Only count the coordinates that are in the circle, not the ones that are on the border.