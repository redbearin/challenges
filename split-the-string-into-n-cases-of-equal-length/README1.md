Original code did not meet all the criteria. Cleaned-up code so it meets all the criteria.

Create a function that accepts str and cases as parameters where the string is split into N distinct cases of equal length as shown:

Examples
splitNCases("Strengthened", 6) ➞ ["St", "re", "ng", "th", "en", "ed"]

splitNCases("Unscrupulous", 2) ➞ ["Unscru", "pulous" ]

splitNCases("Flavorless", 1) ➞ ["Flavorless" ]

Notes
If it's not possible to split the string as described, return ["Error"].