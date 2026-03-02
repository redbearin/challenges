Mubashir created a simple robot that is navigated by a series of North, East, South, and West [n, e, s, w] commands. Each command moves the robot one step in the given direction. The robot is designed for only two destinations:

Destination No. 1: e, n, e, e, n
Destination No. 2: w, n, w, n, w, w, n
Create a function that takes an array of commands and returns true if the robot reaches any of the destinations, false otherwise.

Examples
robotPath(["s", "e", "e", "n", "n", "e", "n"]) ➞ true
// Robot will end up at destination no. 1

robotPath(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"]) ➞ false
// Robot will be lost somewhere

robotPath(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"]) ➞ true

Notes
N/A