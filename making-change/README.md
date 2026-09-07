Making Change
Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

Coin	Value
Penny	0.01
Nickel	0.05
Dime	0.10
Quarter	0.25

Examples
makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }

makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }

makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
Notes
Amount given will always be less than 100 and more than 0.