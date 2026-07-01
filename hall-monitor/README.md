A floor plan is arranged as follows:

Four rooms, which all lead into the hallway.
It's impossible to move between rooms without first going into the hallway.
Room

Create a function which validates whether the path between rooms is possible. The hallway will be given as the letter 'H'.

Examples
possiblePath([1, "H", 2, "H", 3, "H", 4]) ➞ true

possiblePath(["H", 3, "H"]) ➞ true

possiblePath([1, 2, "H", 3]) ➞ false

Notes
A route may begin or end in a hallway.
All inputs are either numbers 1-4, or the letter "H".
No rooms will repeat.