// Write a javascript function that accepts 
// a string as a parameter and counts the number 
// of vowels within the string.

const countLetters = (str, letters = ['a', 'e', 'i', 'o', 'u']) => 
        str.split('')
        .filter(s => letters.indexOf(s) > -1).length;

console.log(countLetters('abcdefuko'));