Create a function that takes a string (morse code) as an argument and returns an unencrypted string.

Examples
decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"

decodeMorse("-.-. .... .- .-.. .-.. . -. --. .") ➞ "CHALLENGE"

decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"
The following object can be used for coding:

morseToDots = {
  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  ".-.-.-":".", ".----.":""", "---...":":", "--..--":", ", " ":""
}
Notes
Return values are all uppercase.
Input string can have digits.
Input string can have some special chararacters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark).