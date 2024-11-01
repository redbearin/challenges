Mubashir needs your help to find out number of animals hidden in a given string txt.

You are provided with an array of animals given below:

animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]
Rule: Return the maximum number of animal names. See the below example:

txt = "goatcode"

countAnimals(txt) ➞ 2
// First animal = "dog"
// Remaining string = "atcoe",
// Second animal = "cat".
// count = 2 (correct)

// If you got a "goat" first time
// remaining string = "code",
// no animal will be found during next time.
// count = 1 (wrong)
Examples
countAnimals("goatcode") ➞ 2
// "dog", "cat"

countAnimals("cockdogwdufrbir") ➞ 4
// "cow", "duck", "frog", "bird"

countAnimals("dogdogdogdogdog") ➞ 5
Notes
N/A