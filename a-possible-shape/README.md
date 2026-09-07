Given the number n and an array of interior angles angles, return whether or not it's possible to make a polygon with n sides with the angles given. Remember that angles must be equals or under 180° and over 0°.

isShapePossible(3, [80, 70, 30]) ➞ true
Triangle with the angles 80, 70 and 30

A shape with 3 sides and the angles 80°, 70° and 30° is a possible shape.

Examples
isShapePossible(4, [90, 90, 90, 90]) ➞ true

isShapePossible(3, [20, 20, 140]) ➞ true

isShapePossible(1, [21]) ➞ false
// n must be larger than 2

isShapePossible(5, [500, 0, 20, 10, 10]) ➞ false
// You can't have an interior angle bigger than 180°
// You can't have an interior angle lower than 0° or equal to 0°

Notes
Return false if n is less than 3 (see example #3).
There will always be an n number of positive integers given as angles.
The sum of interior angles is (n - 2) x 180°.