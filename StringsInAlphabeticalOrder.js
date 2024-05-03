// Write a JavaScript function that returns a passed string with letters 
// in alphabetical ondragover.

const alphabeticalOrder = (str) =>
    str.toLowerCase().split('').sort().join('');

    console.log(alphabeticalOrder('Webmaster'))