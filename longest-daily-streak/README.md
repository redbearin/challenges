Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.

Examples
dailyStreak([true, true, false, true]) ➞ 2

dailyStreak([false, false, false]) ➞ 0

dailyStreak([true, true, true, false, true, true]) ➞ 3

Notes
Return your output as an integer.
If a given array is all false, return 0 (see example #2).