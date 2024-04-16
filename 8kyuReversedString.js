
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// function solution(str){
//     return str.split('').reverse().join('');
//   }



function solution(str){
    var splittedString = str.split('');
    
    var reverseStr = splittedString.reverse();
    
    var joinStr = reverseStr.join('');
    
    return joinStr;
  }
  console.log(solution('world'));