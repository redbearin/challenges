A floor plan is arranged as follows:

You may freely move between rooms 1 and 2.
You may freely move between rooms 3 and 4.
However, you can enter the hallway to move between rooms 2 and 4.
Floor Plan

Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

Examples
possiblePath([1, 2, "H", 4, 3]) ➞ true

possiblePath(["H", 1, 2]) ➞ false

possiblePath([4, 3, 4, "H", 4, "H"]) ➞ true

Notes
A route may begin or end in any room (including the hallway).
All inputs are either numbers 1-4 or the letter "H".
No rooms will repeat.