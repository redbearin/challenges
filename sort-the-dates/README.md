In this challenge, sort an array containing a series of dates given as strings. Each date is given in the format DD-MM-YYYY_HH:MM:

"12-02-2012_13:44"
The priority of criteria used for sorting will be:

Year
Month
Day
Hours
Minutes
Given an array arr and a string type, implement a function that returns:

if type is equal to "ASC", the array arr sorted in ascending order.
if type is equal to "DSC", the array arr sorted in descending order.
Examples
sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "ASC") ➞ [
  "10-02-2016_12:30", "10-02-2018_12:15", "10-02-2018_12:30"
]

sortDates(["10-02-2018_12:30", "10-02-2016_12:30", "10-02-2018_12:15"], "DSC") ➞ [
  "10-02-2018_12:30", "10-02-2018_12:15", "10-02-2016_12:30"
]

sortDates(["09-02-2000_10:03", "10-02-2000_18:29", "01-01-1999_00:55"], "ASC") ➞ [
  "01-01-1999_00:55", "09-02-2000_10:03", "10-02-2000_18:29"
]

Notes
Remember: the date is in the format DD-MM-YYYY_HH:MM.
You can expect only valid formatted dates, without exceptions to handle.