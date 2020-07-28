console.log("my files are connected")


document.addEventListener("DOMContentLoaded",
  function(){//declare all variables at the top to clean up code
      
    const player1= "pup";
    const player2= "dog";
    const boxes = document.querySelector("td")
    let pupPieces= document.getElementsByClassName("pupPiece")
    let dogPieces = document.getElementsByClassName("dogPiece")
    let moveablePieces = document.getElementsByClassName("moveable")
    let pupActivePieces = 12;
    let dogActivePieces = 12;
    let playPieces;
    let lastClicked ;
    let currentTurn = true;
    const gameboard = 
    [null, 1, null, 2, null, 3, null, 4, null, 5, null, 
        6, null, 7, null, 8, null, 9, null, 10, null, 11, 
        null, 12, null, 13, null, 14, null, 15, null, 
        16, null, 17, null, 18, null, 19, null, 20, 
        21, null, 22, null, 23, null, 24, null, 25, null, 26, 
        null, 27, null, 28, null, 29, null, 30, null, 31, null, 32, null ]

        //worry about gameflow
        //how do we get things to work correctly and flow seamlessly
        //game logic
        //pups and dogs on far left or right can only move 4 not 5
        
        

        //function for players switch(completed)
        //function for players movement(diagonally only)
        //function for king pieces
        //function to then make kings move backwards or forwards diagonally


        //a function so that the pieces on the board listen to the addEventListener
        function havePiecesListen(){

            if(currentTurn){
                for(let i = 0; i < pupPieces.length; i++){
                    pupPieces[i].addEventListener("click", getPieces)
                }
            } else{
                for ( let i = 0; i < dogPieces.length; i++){
                    dogPieces[i].addEventListener("click", getPieces)
                }
            }
        }
        havePiecesListen();
       
        //   callback function to change turns and set a box to in use 
                 function getPieces(e){
                if (currentTurn){
                    lastClicked = e.target.id
                    playPieces = pupPieces;
                    console.log( "clicked")
                    document.getElementById(lastClicked).removeEventListener("click", getPieces)
                    let plus4 = parseInt(lastClicked) + 4;
                    let possMove4 = document.getElementById(plus4)
                    let plus5 = parseInt(lastClicked) + 5;
                    let possMove5 = document.getElementById(plus5)
                    let plus7 = parseInt(lastClicked) + 7;
                    let possMove7 = document.getElementById(plus7)
                    let plus8 = parseInt(lastClicked) + 8;
                    let possMove8 = document.getElementById(plus8)
                   //if on far right side of board, can only go up 4 
                   //if statement add event clicker ONLY if no other dog or pup in spot
                   if (possMove4.innerHTML === ""){
                    possMove4.addEventListener("click", swapSpots)
                       
                   }else if( possMove4.innerHTML === "dog"){
                       
                       if(possMove7.innerHTML = "" ){
                        possMove7.addEventListener("click", swapSpots)
                        }
                    }
                    if( possMove5.innerHTML === ""){
                        possMove5.addEventListener("click", swapSpots)
                    }else if( possMove5.innerHTML === "dog"){
                        if( possMove8.innerHTML= ""){
                            possMove8.addEventListener("click", swapSpots)
                        }


                    }
                } else {
                    lastClicked = e.target.id
                    playPieces = pupPieces;
                    console.log( "clicked")
                     document.getElementById(lastClicked).removeEventListener("click", getPieces)
                    let minus4 = parseInt(lastClicked) - 4;
                    let possMove4 = document.getElementById(minus4)
                    let minus5 = parseInt(lastClicked) - 5;
                    let possMove5 = document.getElementById(minus5)
                    let minus7 = parseInt(lastClicked) - 7;
                    let possMove7 = document.getElementById(minus7)
                    let minus8 = parseInt(lastClicked) - 8;
                    let possMove8 = document.getElementById(minus8)
                   //if on far right side of board, can only go up 4 
                   //if statement add event clicker ONLY if no other dog or pup in spot
                   if (possMove4.innerHTML === ""){
                    possMove4.addEventListener("click", swapSpots)
                       
                   }else if( possMove4.innerHTML === "pup"){
                       
                       if(possMove7.innerHTML = "" ){
                        possMove7.addEventListener("click", swapSpots)
                        }
                    }
                    if( possMove5.innerHTML === ""){
                        possMove5.addEventListener("click", swapSpots)
                    }else if( possMove5.innerHTML === "pup"){
                        if( possMove8.innerHTML= ""){
                            possMove8.addEventListener("click", swapSpots)
                        }


                    }}

                
                // removeSquareonclick();
                // resetBoxes();
            }

            function swapSpots(e){
                if (currentTurn ){
                    let pupPiece = document.getElementById(e.target.id)
                    pupPiece.innerHTML = "pup"
                    document.getElementById(lastClicked).innerHTML = ""
                    console.log("movedPup")
                    currentTurn = false;
                    console.log(pupPiece)
                    
                    pupPiece.removeEventListener("click", swapSpots)
                    document.getElementById(lastClicked).addEventListener("click", getPieces)
                    havePiecesListen();
                
                }else{
                    document.getElementById(e.target.id).innerHTML = "dog"
                    document.getElementById(lastClicked).innerHTML = ""
                    console.log("movedDog")
                    currentTurn = true;
                    document.getElementById(e.target.id).removeEventListener("click", swapSpots)
                    document.getElementById(lastClicked).addEventListener("click", getPieces)
                    havePiecesListen();
                }
            }
 })
                    
                 
            
            