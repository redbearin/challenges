Write a function that removes any non-letters from a string, returning a well-known film title.

Examples
lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"

lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"

lettersOnly("^U)6$22>8p).") ➞ "Up"

Notes
See the Resources section for more information on JavaScript string methods.

*** slightly different
Check if the given string consists of only letters and spaces and if every letter is in lower case.

Examples
lettersOnly("JAVACRIPT") ➞ false

lettersOnly("javascript") ➞ true

lettersOnly("12321313") ➞ false

lettersOnly("i have spaces") ➞ true

lettersOnly("i have numbers(1-10)") ➞ false

lettersOnly("") ➞ false

Notes
Empty arguments will always return false.
Input values will be mixed (symbols, letters, numbers).
