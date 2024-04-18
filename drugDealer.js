let knockCount = 0;
let isDrugDealer = false;

function respondToKnock() {
    if (knockCount < 5) {
        // Normal customer behavior
        console.log("Hello, how can I help you?");
    } else {
        // Drug dealer behavior
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

// Simulate a customer knocking
knock(); // Knock 1
knock(); // Knock 2
knock(); // Knock 3
knock(); // Knock 4
knock(); // Knock 5

// Now the customer is acting as a drug dealer
isDrugDealer = true;
knock(); // Knock 6 (as a drug dealer)

console.log(respondToKnock(6));