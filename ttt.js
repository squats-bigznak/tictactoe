//game loop:
//load screen 
//hit restart
//screen switches to "player X turn"
//tooltip changes to X
//X is played
//win/tie conditions checked
//screen switches to "player O turn"
//O is played
//conditions checked 
//conditions reached
//X/O is winner
//only clickable button is "restart"

const Gamecontroller = (() => {

  //token refers to the player's identity, in this case "X" or "O"

  const playerFactory = (token) => {
    const sayHello = () => console.log('Player ' + token + ' hello!');
    return {sayHello, token};
  };

  const playerX = playerFactory('X');
  const playerO = playerFactory('O');

  // playerX.sayHello();
  // playerO.sayHello();
  // console.log(playerX.token);
  // console.log(playerO.token);
  var currentPlayer = playerX;

  const getCurrentPlayerToken = () => {

    //this switches players every turn

    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    // console.log(currentPlayer);
    return (currentPlayer.token);
    
  };

  return {getCurrentPlayerToken};
  
})();

//Gameboard Module with methods for resetting board,
//updating board, and checking win conditions.

const Gameboard = (() => {

    var gameboard = [0,1,2,3,4,5,6,7,8];
    var turncount = 0;

    // const getBoard = () => board;

    const playTurn = (space, token) => {
      if((gameboard[space] == 'X') || (gameboard[space] == 'O')){
        console.log("spot already chosen");
      }
      else{
      gameboard.splice(space, 1, token);
      turncount++; 
      return gameboard;
      }
    };  

    const checkWin = () =>{
    
      console.log(turncount);
      console.log(gameboard);
      if (turncount === 9){
        return ("tie!");
      }
      
      else if ((gameboard[0] === gameboard[1])&&(gameboard[1] === gameboard[2]))
      {
        return (gameboard[0] + " win");
      }
      else if((gameboard[0] === gameboard[3])&&(gameboard[3] === gameboard[6]))
      {
        return (gameboard[0] + " win");
      }
      else if((gameboard[0] === gameboard[4])&&(gameboard[4] === gameboard[8]))
      {
        return (gameboard[0] + " win");
      }
      else if((gameboard[1] === gameboard[4])&&(gameboard[4] === gameboard[7]))
      {
        return (gameboard[1] + " win");
      }
      else if((gameboard[2] === gameboard[5])&&(gameboard[5] === gameboard[8]))
      {
        return (gameboard[2] + " win");
      }
      else if((gameboard[3] === gameboard[4])&&(gameboard[4] === gameboard[5]))
      {
        return (gameboard[3] + " win");
      }
      else if((gameboard[6] === gameboard[4])&&(gameboard[4] === gameboard[2]))
      {
        return (gameboard[6] + " win");
      }
      else if((gameboard[6] === gameboard[7])&&(gameboard[7] === gameboard[8]))
      {
        return (gameboard[6] + " win");
      }
    };

    const resetBoard = () =>{
      gameboard = [0,1,2,3,4,5,6,7,8];
    }
    
    return {
      playTurn, checkWin, resetBoard
    }
    
  })();

  //here's where we put it all together

  function playGame(){
    Gameboard.resetBoard();

    //while loop?
    do {
      Gameboard.playTurn(prompt(), Gamecontroller.getCurrentPlayerToken());
      console.log(Gameboard);
    }
    while (Gameboard.checkWin() === undefined);
    
    console.log(Gameboard.checkWin());
  };

 playGame();

  // console.log(Gameboard.playTurn(0,Gamecontroller.getCurrentPlayerToken()));
  // console.log(Gameboard.playTurn(1,Gamecontroller.getCurrentPlayerToken()));
  // console.log(Gameboard.playTurn(2,Gamecontroller.getCurrentPlayerToken()));
  // console.log(Gameboard.playTurn(3,Gamecontroller.getCurrentPlayerToken()));

  // console.log(Gameboard.playTurn(5,'x'));
  // console.log(Gameboard.playTurn(6,'x'));
  // console.log(Gameboard.playTurn(7,'x'));
  // console.log(Gameboard.playTurn(8,'o'));
  // console.log(Gameboard.checkWin());
  // Gamecontroller.switchPlayer();
  // console.log(Gamecontroller.switchPlayer);
  // console.log(Gamecontroller.switchPlayer.token);
  // Gamecontroller.switchPlayer();
  // console.log(Gamecontroller.switchPlayer);
  // console.log(Gamecontroller.switchPlayer.token);
  // console.log(Gamecontroller.switchPlayer());
  // console.log(Gamecontroller.switchPlayer());