I made a mistake and overwrote a JSON file with some weird data, thankfully I had no back-up and I'm too lazy to fix it so now you guys can solve it for me!

Get the strings out of those arrays.

Examples
getValue([[[[[[[[[[[[[[[["Bazinga"]]]]]]]]][]]]]]]]]) ➞ "Bazinga"

getValue([[[][[[[[[[["God, what is happening"]]]]]]]]]) ➞"God, what is happening"

getValue([[[[[[[[[[[]]]]]]]]]]]) ➞ "What... why did you make this?"

getValue([[][][][][][][][[][][[[[[[["I have no idea what i'm doing"]]]]]]]]]) ➞ 
"I have no idea what i'm doing"

Notes
Notice that if there is no string, you should return a pre-defined string (see example #3).