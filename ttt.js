//start with an array 0-8
//player a chooses a number that hasn't been chosen yet
//player b chooses a number that hasn't been chosen yet
//repeat
//check after each turn for each of 8 win conditions
//if no win condition by turn 9 tie

//0 1 2
//3 4 5
//6 7 8

//win conditions (sorted) - 012, 036, 048, 147, 258, 345, 642, 678

const Gameboard = (() => {

    var gameboard = ['0','1','2','3','4','5','6','7','8'];

    const updateBoard = (space, player) => {
      // log("Updating Board");
      gameboard.splice(space, 1, player);
      return gameboard;
    };  
    
    return {
      updateBoard,
    }
    
  })();
  
  
  console.log(Gameboard.updateBoard(0,'x'));