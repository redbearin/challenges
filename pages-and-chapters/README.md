Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close, return whichever has the higher page.

Examples
closestToPage({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


closestToPage({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


closestToPage({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"

Notes
All page numbers in the book are valid integers.