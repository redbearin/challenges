Given an array of strings (depicting a skyline of several buildings), return in meters the height of the tallest building. Each line in the list represents 20m.

Examples
tallestBuildingHeight([
  "            ##",
  "            ##",
  "            ##",
  "###   ###   ##",
  "###   ###   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "140m"

// Tallest building is 7 rows
// 7 x 20m = 140m

tallestBuildingHeight([
  "               ",
  "               ",
  "               ",
  "       #    ###",
  "      # #   ###",
  "###   ###   ###",
  "###   ###   ###"
]) ➞ "80m"

// tallest building is 4 rows
// 4 x 20m = 80m

tallestBuildingHeight([
  "                              ",
  "                         ###  ",
  "                         ###  ",
  "###                    #####  ",
  "###      #             #####  ",
  "###     ###            #####  ",
  "######  ###            #######",
  "######  ######  ###    #######",
  "###################    #######",
  "###############################",
  "###############################"
]) ➞ "200m"

// Tallest building is 10 rows
// 10 x 20m = 200m
Notes
There may be some open sky above buildings (can't just find the length of the array).
There may be multiple tallest buildings (see example #2).