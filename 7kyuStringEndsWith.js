// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



function solution(str, ending){
  // TODO: complete
  
  if (ending.length > str.length){
    return false;
  }
  
  for (let i = 0; i<=str.length - ending.length; i++){
    if(str.slice(i) === ending){
          return true;
    }
    
  }
  
  return false;
  
}

// add another condition to check for the empty part of the endings.
if (ending === '') {
  return true;
}
console.log(solution('shema', 'ja'));