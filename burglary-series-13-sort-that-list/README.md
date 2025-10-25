The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

Examples
{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }

{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }

{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }

Notes
Please note that one should not rely on property order of an ordinary Object: Although the keys of an ordinary Object are ordered now, they didn't used to be, and the order is complex. As a result, it's best not to rely on property order. MDN Source