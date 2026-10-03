Given:
const results = ["Maria", "David", "Sarah"];

Write:
const formatPodium = results => {
  // your code
};

It should return:
1st: Maria | 2nd: David | 3rd: Sarah

It should also handle:
const results = ["Maria", "David"];

by returning:
1st: Maria | 2nd: David | 3rd: No finisher

Requirements: destructure the first three array elements inside the function body, give each position a default value of "No finisher", don't modify the input array, and don't use results[0], results[1], etc.
