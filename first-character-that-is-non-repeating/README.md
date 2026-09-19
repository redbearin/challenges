Write a function that returns the first character that appears exactly once in a string.

const firstUniqueChar = str => {
  // your solution
};

Examples:
firstUniqueChar("javascript");  // "j"
firstUniqueChar("aabbcddee");    // "c"
firstUniqueChar("aabbcc");       // null
firstUniqueChar("swiss");        // "w"
firstUniqueChar("");             // null

The comparison is case-sensitive, so "A" and "a" are different characters.

There are a few tempting approaches that work but do more work than necessary. See if you can get O(n) time without making the code cryptic.

No hints until you submit.