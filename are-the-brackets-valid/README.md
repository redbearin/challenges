Write a function called validBrackets that takes a string containing brackets and determines whether they are properly matched and nested.

There are three types:

()
[]
{}

Return true when they're valid and false when they're not.

validBrackets("()");       // true
validBrackets("()[]{}");   // true
validBrackets("{[()]}");   // true
validBrackets("([{}])");   // true

validBrackets("(]");       // false
validBrackets("([)]");     // false
validBrackets("(((");      // false
validBrackets("]");        // false

The empty string should count as valid:

validBrackets(""); // true

For this challenge, assume the string contains only these six characters:

( ) [ ] { }

You can use arrays, objects, loops, and normal array/string methods.

Optional hint: The tricky example is:

validBrackets("([)]"); // false

It's not enough to count how many opening and closing brackets there are. Their order matters.
