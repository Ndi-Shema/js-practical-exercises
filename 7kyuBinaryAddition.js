
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


function addBinary(a,b) {
    //return addBinary.reduce((a,b)) // doesn.t work because we use this to an array-like object.
      
      let sum = a + b;
      let binary = sum.toString(2);
      
      return binary;
    }