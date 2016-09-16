
/** ADVANCED R-P-S!
 * 
 * authour: Jacob van Niekerk, 200197738
 * 
 * This is a game of rock-paper-scissors which includes new
 * rope and cup options. 
 */


/*
    Comparison method for plays:
 */
function compare (user,comp) {
    // This choices message describes who choose what play.
    var choices = '\nPlayer chooses: '+player+'\nComputer chooses: '+computer;
    
    // This result will be composed of the final message to the user,
    // i.e. who won the round.
    var result = '\n   ';

    // List of all acceptable inputs:
    var plays = ['rock','paper','scissors','rope','cup'];

    // Check for valid play:
    if (
        user == 'rock' ||
        user == 'paper' ||
        user == 'scissors' ||
        user == 'rope' ||
        user == 'cup'
    ) {
        // Play is valid!
        // Compare the user's play against the computer's.
        if(
            // User chooses rock...
            (user == 'rock' && // ... which beats scissors and rope.
                    (comp == 'scissors' || comp == 'rope')) ||
            // User chooses paper...
            (user == 'paper' && // ... which beats rock and cup.
                    (comp == 'rock' || comp == 'cup')) ||
            // User chooses scissors...
            (user == 'scissors' && // ... which beats paper and rope.
                    (comp == 'paper' || comp == 'rope')) ||
            // User chooses rope...
            (user == 'rope' && // ... which beats paper and cup.
                    (comp == 'paper' || comp == 'cup')) ||
            // User chooses cup...
            (user == 'cup' && // ... which beats rock and scissors.
                    (comp == 'rock' || comp == 'scissors'))
            ) 
        {
            // If the player wins:
            result += 'Player wins!';
        }
        else if (user == comp) {
            // If the player and computer draw:
            result += 'It\'s a draw!';
        }
        else {
            // If the computer wins:
            result += 'Computer wins!';
        }
        // Log the final message to the console.
        alert(choices+result);
    }
    // Play is invalid.
    else {
        alert('Invalid choice. Please play again!')
    }
} // end method: compare(user,comp);


/* 
    Game Procedure: 
*/

// Prompt the user for their choice of play:
var player = prompt('Choose [rock], [paper], [scissors], [rope], or [cup]:');

// Roll a five-sided die:
var random = Math.random();

// Translate the result of the rolled die to a choice of play for the computer:
var computer = 
    // Computer chooses:
    random >= 0.8? 'rock':      // ROCK
    random >= 0.6? 'paper':     // PAPER
    random >= 0.4? 'scissors':  // SCISSORS
    random >= 0.2? 'rope':      // ROPE
    'cup';                      // CUP

// Compare the results of the two players:
compare(player,computer);

// Game Over.