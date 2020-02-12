let wallet = '$100'
//let dieOne = 0
//let dieTwo = 0
//let rollTheDice = 0 find sum 
let total = 0
let points = 0
let winner = 0
let loser = 0
//let players = (user, house)
//let host = 
// winningNumbers = 7, 11
// crapsNumbers = 2, 3, 12

/*let host = prompt("Welcome to the Casino! This is our Craps table. You have $100. Would you like to play?");
    if (host == "yes") {
        return "Great! Let's get rolling!"
    } else {
        return "Too bad. See you next time."
};*/

// use math to get random die roll //write function 
function rollTheDice(){
    var dieOne = Math.floor(Math.random()*6)+1;
    var dieTwo = Math.floor(Math.random()*6)+1; 
    rollTheDice = dieOne + dieTwo;
    return rollTheDice;
}
 console.log(rollTheDice());

//switch statement for winning and losing 'cases'??

switch (rollTheDice) {
    case 7:
        winner;
        break;
    case 11:
        winner;
        break;
    case 2:
        loser;
        break;
    case 3:
        loser;
        break;
    case 12:
        loser;
        break;
}