Write a function called firstUnique that takes a string and returns the first character that appears only once in the entire string.

firstUnique("aabbcdd");     // "c"
firstUnique("javascript");  // "j"
firstUnique("aabbcc");      // null
firstUnique("swiss");       // "w"
firstUnique("x");           // "x"

Make it case-sensitive, so "A" and "a" count as different characters:

firstUnique("aAbA"); // "a"

Rules
You can use loops, objects, arrays, and string methods. But try not to use .indexOf() or .lastIndexOf() to solve the whole thing.

Small hint if you need it: Think about how you could first count how many times each character occurs, then figure out which character is the first with a count of 1.

There are a couple of ways to approach this one. Try it without looking anything up, and send me what you come up with