// Take a look at the following code:

class Toy {}
class Dragon extends Toy {}
const dragon1 = new Dragon();

console.log(dragon1);


// The dragon1 variable is an object created 
// by the Dragon class, and since the Dragon
//  class extends the Toy class, dragon1 is also considered an instance of Toy.