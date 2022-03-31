// Regex: text String for describing a search pattern
// The parses goes character by character when searching.

// Special characters
// ? --> to match is another character exists
// [] --> to specify that a letter can be uppercase or lowercase,
//        which is calles a character set in regex. It can also
//        be used with alphanumeric characters.

// [A-Z] --> Only uppercase letters
// [A-Z a-z] --> Both uppercase and lowercase letters (two-character set)

// Wildcards
// [0-9]         \d  Matching digits
// [A-Za-z0-9]   \w  Matching letters (inclusive) and digits
// [ \t\r\n\f]   \s  Matching whitespaces
// Any character .   Matching any character

// You can test regex at regexr.com

// /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
//   (?=.*?[A-Z]) At least one upper case English letter
//               (?=.*?[a-z]) At least one lower case English letter
//                           (?=.*?[0-9]) At least one digit
//                                       (?=.*?[#?!@$%^&*-]) At least one special character
//                                                          .{8,} Minimum eight in length (with the anchors)

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/g

// What does a question mark in regex do?
// It matches zero or one of the previous character.