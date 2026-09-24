Write a function that determines whether two strings are anagrams of each other.

const areAnagrams = (str1, str2) => {
  // your solution
};

Examples:

areAnagrams("listen", "silent");        // true
areAnagrams("hello", "ollhe");          // true
areAnagrams("hello", "world");          // false
areAnagrams("Dormitory", "dirty room"); // true
areAnagrams("aabb", "abbb");            // false

For this challenge, the rules are explicit:

Comparison is case-insensitive.
Spaces should be ignored.
Other characters are significant. For example, "abc!" and "abc" are not anagrams.
Repeated characters must occur the same number of times.
The original strings must not be modified.
Empty strings count as anagrams of each other.

So:

areAnagrams("", "");             // true
areAnagrams("A b", "ba");        // true
areAnagrams("abc!", "!C B A");   // true
areAnagrams("abc!", "abc");      // false
The optimization target

A very natural solution is to normalize both strings, sort their characters, and compare them. That works.

But sorting means roughly O(n log n) time.

See if you can find a clean O(n) approach without making the code harder to understand.