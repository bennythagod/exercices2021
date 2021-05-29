/*
Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Examples
encrypt("banana") ➞ "0n0n0baca"

encrypt("karaca") ➞ "0c0r0kaca"

encrypt("burak") ➞ "k0r3baca"

encrypt("alpaca") ➞ "0c0pl0aca"
Notes
All inputs are strings, no uppercases and all output must be strings.
*/

function encrypt(str) {
    var strReturn = "";

    for (var i = str.length - 1; i >= 0; i--) {
        var actualLetter = str[i];

        if (actualLetter == "a")
            actualLetter = "0";
        else if (actualLetter == "e")
            actualLetter = "1";
        else if (actualLetter == "i")
            actualLetter = "2";
        else if (actualLetter == "o")
            actualLetter = "2";
        else if (actualLetter == "u")
            actualLetter = "3";

        strReturn = strReturn + actualLetter;
    }

    return strReturn + "aca";
}

exports.solution = encrypt;