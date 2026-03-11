Remove enemies from the array of people, even if the enemy shows up twice.

Examples
removeEnemies(["Fred"], []) ➞ ["Fred"]

removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]) ➞ ["Adam", "Tanya"]

removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]) ➞ ["Emily", "Steve"]

Notes
All names to be removed will be in the enemies array; simply return the array, no fancy strings.