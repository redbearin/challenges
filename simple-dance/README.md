You will be given an array of dancing couples, with the woman first and man second, as well as a parameter "men" or "women".

If the parameter is "men", the men reverse their positions (first moves to last, last moves to first, etc), while women keep their positions.
If the parameter is "women", the women reverse their positions, while men keep their positions.
Examples
dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], men) ➞ [
  [Ana, Tim],
  [Amy, Josh],
  [Lisa, Bob]
]

dance([
  [Ana, Bob],
  [Amy, Josh],
  [Lisa, Tim]
], women) ➞ [
  [Lisa, Bob],
  [Amy, Josh],
  [Ana, Tim]
]

Notes
Input arrays will always be the same length.