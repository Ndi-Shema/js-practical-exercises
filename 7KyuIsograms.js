// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



// OTHER ALTERNATIVES

// function isIsogram(str){
//     var i, j;
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
//   }




function isIsogram(str) {
    str = str.toLowerCase();
   
   const charCount = {};
   //using the test method to check the regex
   for (const char of str){
     if (/[a-z]/.test(char)){
       if (charCount[char]){
         return false;
       }
       
       charCount[char] = true;
     }
   }
   
   return true;
 }