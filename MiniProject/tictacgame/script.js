

let totalturn=0;
// winner decide karo
let winner=[[0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]];

let board_array=new Array(9).fill('E');
//   0   1   2   3   4   5   6   7   8 
// ["E","E","E","E","E","E","E","E","E"]

function checkwinner(){
      for(let [index0,index1,index2] of winner){
             if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2]&&board_array[index0]===board_array[index2]){
                return 1;
             } 
      }
      return 0;
}


// print ho raha hai
let turn="O";
const board=document.querySelector(".board");
let printer=(event)=>{
    // console.log(event.target.id);
    const element=event.target;
 
  if(board_array[element.id]==="E"){  
     totalturn++;
     if(turn==="O"){
     element.innerText="O";
     board_array[element.id]="O";
     if(checkwinner()){
         document.getElementById("winner").innerText="WINNER IS 0";
         board.removeEventListener("click",printer);
         return;
     }
     turn="X";
     }
     else{
         element.innerText="X";
         board_array[element.id]="X";
         if(checkwinner()){
             document.getElementById("winner").innerText="WINNER IS X";
             board.removeEventListener("click",printer);
             return;
         }
         turn="O";
     }

     if(totalturn===9){
        document.getElementById("winner").innerText="MATCH IS DRAW";
        board.removeEventListener("click",printer);
     }
 }
 }
board.addEventListener("click",printer);


// board.removeEventListener("click",callbackfunction)




// restart button
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    const htmlcollection=document.getElementsByClassName("box");
    Array.from(htmlcollection).forEach((value)=>{
        value.innerText="";
    })
    turn="O";
    totalturn=0;
    board_array=new Array(9).fill("E");
    document.getElementById("winner").innerText="";
    board.addEventListener("click",printer);
})


// restart hone ke baad 
// humko turn ko "O" board_array="E" totalturn=0
// result ko bhi hatana hoga