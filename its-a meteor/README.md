In a video game, a meteor will fall toward the main character's home planet. Given the meteor's trajectory as a string in the form y = mx + b and the character's position as an array pair of [x, y], return true if the meteor will hit the character and false if it will not.

Examples
willHit("y = 2x - 5", [0, 0]) ➞ false

willHit("y = -4x + 6", [1, 2]) ➞ true

willHit("y = 2x + 6", [3, 2]) ➞ false

Notes
The b value will never be zero or blank.
The m value will always be an integer.