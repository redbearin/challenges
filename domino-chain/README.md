Mubashir was playing with dominos. He concluded that:

If the first domino is pushed over, it will keep tipping next dominos to its right.
Reaction will stop if a domino is already tipped over, or if there is an empty space.
Mubashir

Create a function which takes a string of current status of the dominos and returns the string after dominos chain reaction.

"|" represents a standing domino.
"/" represents a tripped domino.
" " represents an empty space.
Examples
dominoChain("||| ||||//| |/") ➞ "/// ||||//| |/"
// A space will stop the reaction.

dominoChain("||//||") ➞ "////||"
// An already tripped domino will stop the reaction.

dominoChain("||||") ➞ "////"

Notes
N/A