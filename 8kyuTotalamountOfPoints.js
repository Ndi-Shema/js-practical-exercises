// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4



function points(games) {
    let totalPoints = 0;
    
    for (let game of games) {
      
      const [scoreX, scoreY] = game.split(":");
      
      const x = parseInt(scoreX, 10);
      const y = parseInt(scoreY, 10);
      
       if ( x > y) {
         totalPoints += 3;
       } else if ( x < y){
         totalPoints += 0 ;
       } else {
         totalPoints += 1;
       }
      console.log(`Scores for game: ${game}, Array: [${scoreX}, ${scoreY}]`);
      }
    return totalPoints;
  }
   