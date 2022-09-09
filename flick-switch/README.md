Flick Switch
Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples
flickSwitch(["edabit", "flick", "eda", "bit"]) ➞ [true, false, false, false]

flickSwitch(["flick", 11037, 3.14, 53]) ➞ [false, false, false, false]

flickSwitch([false, false, "flick", "sheep", "flick"]) ➞ [true, true, false, false, true]

Notes
"flick" will always be given in lowercase.
An array may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.