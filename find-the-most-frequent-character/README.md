Write a function called mostFrequent that takes a string and returns the character that appears the most times.

mostFrequent("javascript"); // "a"
mostFrequent("banana");     // "a"
mostFrequent("hello");      // "l"
mostFrequent("aaaa");       // "a"

Here's the extra wrinkle: if multiple characters are tied, return whichever one appears first in the original string.

mostFrequent("aabb"); // "a"
mostFrequent("bbaa"); // "b"
mostFrequent("abc");  // "a"

For an empty string, return null:

mostFrequent(""); // null

This challenge applies to any characters, including numbers and symbols—not just letters. 😄

mostFrequent("11222!!"); // "2"

You can use objects, arrays, loops, and string methods. No restrictions on .sort(), although you shouldn't need it.
