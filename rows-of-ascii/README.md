Given a very long string of ASCII characters, split the string up into equal sized groups of size width. To properly display the image, join up the groups with the newline character \n and return the output string.

See the miniature examples below for clarity!

Examples
formatAscii("0123456789", 2) ➞ "01\n23\n45\n67\n89"

formatAscii("................................", 8) ➞ "........\n........\n........\n........"

formatAscii("^^^^^^^^", 1) ➞ "^\n^\n^\n^\n^\n^\n^\n^"

Notes
Enjoy the (somewhat oversized) art in the Tests tab.