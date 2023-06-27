//need playerFactory
//functionality will be to toggle entire UI between X and O

const playerFactory = (token) => {
  const sayHello = () => console.log('Player ' + token + ' hello!');
  return {sayHello, token};
};

const playerX = playerFactory('X');
const playerO = playerFactory('O');

playerX.sayHello();
playerO.sayHello();
console.log(playerX.token);
console.log(playerO.token);



//Gameboard Module with methods for resetting board,
//updating board, and checking win conditions.

const Gameboard = (() => {

    var gameboard = [0,1,2,3,4,5,6,7,8];
    var turncount = 0;

    const updateBoard = (space, player) => {
      gameboard.splice(space, 1, player);
      turncount++; 
      return gameboard;
    };  

    const checkWin = () =>{
    
      console.log(turncount);
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
      updateBoard, checkWin, resetBoard
    }
    
  })();



  console.log(Gameboard.updateBoard(0,'x'));
  console.log(Gameboard.updateBoard(1,'o'));
  console.log(Gameboard.updateBoard(2,'o'));
  console.log(Gameboard.updateBoard(3,'o'));
  console.log(Gameboard.updateBoard(4,'o'));
  console.log(Gameboard.updateBoard(5,'x'));
  console.log(Gameboard.updateBoard(6,'x'));
  console.log(Gameboard.updateBoard(7,'x'));
  console.log(Gameboard.updateBoard(8,'o'));
  console.log(Gameboard.checkWin());
  