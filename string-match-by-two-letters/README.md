Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

Examples
strMatchBy2char("yytaazz", "yyjaaz") ➞ 3

strMatchBy2char("edabit", "ed") ➞ 1

strMatchBy2char("", "") ➞ 0

Notes
Don't forget to return the result.