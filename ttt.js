
const Gamecontroller = (() => {

  //token refers to the player's identity, in this case "X" or "O"

  const playerFactory = (token) => {
    const sayHello = () => console.log('Player ' + token + ' hello!');
    return {sayHello, token};
  };

  const playerX = playerFactory('X');
  const playerO = playerFactory('O');

  var currentPlayer = playerX;

  const getCurrentPlayerToken = () => {

    //this switches players every turn

    currentPlayer = currentPlayer === playerX ? playerO : playerX;
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

    const chooseSpace = (space, token) => {
      if((gameboard[space] == 'X') || (gameboard[space] == 'O')){
        console.log("spot already chosen");
        return false;
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
      
      
      if ((gameboard[0] === gameboard[1])&&(gameboard[1] === gameboard[2]))
      {
        return (gameboard[0] + " wins!");
      }
      else if((gameboard[0] === gameboard[3])&&(gameboard[3] === gameboard[6]))
      {
        return (gameboard[0] + " wins!");
      }
      else if((gameboard[0] === gameboard[4])&&(gameboard[4] === gameboard[8]))
      {
        return (gameboard[0] + " wins!");
      }
      else if((gameboard[1] === gameboard[4])&&(gameboard[4] === gameboard[7]))
      {
        return (gameboard[1] + " wins!");
      }
      else if((gameboard[2] === gameboard[5])&&(gameboard[5] === gameboard[8]))
      {
        return (gameboard[2] + " wins!");
      }
      else if((gameboard[3] === gameboard[4])&&(gameboard[4] === gameboard[5]))
      {
        return (gameboard[3] + " wins!");
      }
      else if((gameboard[6] === gameboard[4])&&(gameboard[4] === gameboard[2]))
      {
        return (gameboard[6] + " wins!");
      }
      else if((gameboard[6] === gameboard[7])&&(gameboard[7] === gameboard[8]))
      {
        return (gameboard[6] + " wins!");
      }

      else if (turncount === 9){
        return ("It's a tie!");
      }
      else{
        return false;
      }
    };

    const resetBoard = () =>{
      gameboard = [0,1,2,3,4,5,6,7,8];
    }
    
    return {
      chooseSpace, checkWin, resetBoard
    }
    
  })();

function changeSpotDom(space, token){
  
  const tempspace = document.querySelector(`[id=${CSS.escape(space)}]`);
  tempspace.textContent = token;

  console.log(tempspace);
}

  //here's where we put it all together

Gameboard.resetBoard();

function playTurn(space){
  //check win status
  if (Gameboard.checkWin() == false){
    //check DOMtree to see if current move is valid or if space is already occupied
    const checkSpace = document.querySelector(`[id=${CSS.escape(space)}]`);
    if ((checkSpace.textContent !== 'X') && (checkSpace.textContent !== 'O')){
      //need a variable for these so the functions are only called once per turn
      var curToken = Gamecontroller.getCurrentPlayerToken();
      var curChoice = Gameboard.chooseSpace(space, curToken);
      //check chooseSpace to see if the spacechoice is valid
      if ((curChoice !== false)){
      changeSpotDom(space, curToken);
      console.log(Gameboard.checkWin());
        if (Gameboard.checkWin() !== false){
          const showResult = document.querySelector('.results');
          showResult.textContent = Gameboard.checkWin();
        }
      }
    }
  }

  
};

 const zerospace = document.getElementById("0");
 zerospace.addEventListener("click", () => playTurn(0));
 const onespace = document.getElementById("1");
 onespace.addEventListener("click", () =>  playTurn(1));
 const twospace = document.getElementById("2");
 twospace.addEventListener("click", () =>  playTurn(2));
 const threespace = document.getElementById("3");
 threespace.addEventListener("click", () =>  playTurn(3));
 const fourspace = document.getElementById("4");
 fourspace.addEventListener("click", () =>  playTurn(4));
 const fivespace = document.getElementById("5");
 fivespace.addEventListener("click", () =>  playTurn(5));
 const sixspace = document.getElementById("6");
 sixspace.addEventListener("click", () =>  playTurn(6));
 const sevenspace = document.getElementById("7");
 sevenspace.addEventListener("click", () =>  playTurn(7));
 const eightspace = document.getElementById("8");
 eightspace.addEventListener("click", () =>  playTurn(8));
 