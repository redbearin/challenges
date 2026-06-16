Musical instruments have a range of notes to play, some instruments having a much larger range than others.

Given the following ranges for the instrument, create a function that returns true if a given note is within a given instrument's range. Otherwise, return false.

Instrument	Range
Piccolo	D4-C7
Tuba	D1-F4
Guitar	E3-E6
Piano	A0-C8
Violin	G3-A7
Examples
instrumentRange("Piccolo", "A3") ➞ false

instrumentRange("Violin", "G6") ➞ true

instrumentRange("Piano", "C8") ➞ true

Notes
Tests will only include natural notes (i.e. you will only deal with letters and numbers, no special characters).
The musical scale follows this pattern: ... A1, B1, C1, D1, E1, F1, G1, A2, B2 ...
You don't need to worry about invalid inputs.