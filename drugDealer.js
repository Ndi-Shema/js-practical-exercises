
// write a javascrip code for me , this is the scenario:  you are 
// a shop keeper and a drug dealer at the same time,
//   but for you to know that you have to act as a drug 
//   dealer the customer will have to knock five times and then you will let 
//   them know if the drugs are available or not, but if a customer knocks 
//   anywhere than less than 5 times then you know they are a normal customers 
// and you behave like a normal shop keeper.




let knockCount = 0;
let isDrugDealer = false;

function respondToKnock() {
    if (knockCount < 5) {
        // act normal
        console.log("Hello, how can I help you?");
    } else {
        // Drug dealer time hahaha
        if (isDrugDealer) {
            console.log("Hey, the goods are available. Come in quietly.");
        } else {
            console.log("Sorry, we don't have any goods available right now.");
        }
    }
}


function knock() {
    knockCount++;
    console.log("Knock " + knockCount);
    respondToKnock();
}


knock(); 
knock(); 
knock(); 
knock(); 
knock(); 

// Now the customer is acting as a drug dealer
isDrugDealer = true;
knock(); 

console.log(respondToKnock(6));
