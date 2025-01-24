You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?

Examples
cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
]) ➞ true

cropHydrated([
  [ "c", "c", "c" ]
]) ➞ false
// There isn"t even a water source.

cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
]) ➞ false
Notes
"w" on its own should return true, and "c" on its own should return false.