function snakeLadder(){
  let grid=[{
   "snake":[{'start': 98,'end': 2},{'start': 88,'end': 1},{'start': 84,'end': 54},
   {'start': 50,'end': 13},{'start': 21,'end': 3}],
   "ladder":[{'start': 4,'end': 22},{'start': 15,'end': 69},{'start': 28,'end': 53},{'start': 38,'end': 79},
   {'start': 51,'end': 85},{'start': 70,'end': 83}],
   "person":[
     {
       'name':'p1',
       'pos':0
     },
     {
       'name':'p2',
       'pos':0
     },
    {
      'name':'p3',
       'pos':0
     },{
       'name':'p4',
       'pos':0 
      }
     ]
  }
  ];

  let won=false;
  let currentPlayerTurn = 0;
  while(!won){

      console.log('currentPlayerTurn',currentPlayerTurn);
      const random = dice();
      console.log('random',random);
      let currentPlayer = grid[0].person[currentPlayerTurn];
      currentPlayer.pos += random;
      console.log('currentPlayer.pos',currentPlayer.pos);
       if (currentPlayer.pos >= 100){
          currentPlayer.pos = 100;
          won=true;
       }
        else{
            grid[0].ladder.forEach(ladder => { 
              if (ladder.start === currentPlayer.pos) {
                currentPlayer.pos = ladder.end; 
                console.log('ladder',currentPlayer.pos);
              }
            });
            grid[0].snake.forEach(snake => { 
              if (snake.start === currentPlayer.pos) {
                currentPlayer.pos = snake.end; 
                console.log('snake',currentPlayer.pos);
              }
            });
            
        }
      currentPlayerTurn++;
        if (currentPlayerTurn >=4) {
        currentPlayerTurn = 0;
      }

  }


}

snakeLadder();

function dice(){
  return(Math.floor(Math.random() * 6 + 1));
}