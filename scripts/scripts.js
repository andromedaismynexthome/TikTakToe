const winner = document.getElementById('winner-box');
const grid = document.getElementById('grid');
const firstplayer = 'X';
let currentplayer = firstplayer;
const col = document.getElementById('col');
let array = Array(9).fill(null);
function check(){ 
    if(
        (array[0]!==null && array[0]==array[1] && array[1]==array[2]) ||
        (array[3]!==null && array[3]==array[4] && array[4]==array[5]) ||
        (array[6]!==null && array[6]==array[7] && array[7]==array[8]) ||
        (array[0]!==null && array[0]==array[3] && array[3]==array[6]) ||
        (array[1]!==null && array[1]==array[4] && array[4]==array[7]) ||
        (array[2]!==null && array[2]==array[5] && array[5]==array[8]) ||
        (array[0]!==null && array[0]==array[4] && array[4]==array[8]) ||
        (array[2]!==null && array[2]==array[4] && array[4]==array[6]) 
    ){
        
        winner.innerText = `Winner is :- ${currentplayer}`
        grid.style.pointerEvents = 'none';
    }

    if(!array.some(el => el===null)){
        winner.innerText = "Draw"
    }
}

function HandleClick(el){
    const id = el.id;
    if(array[id] !==null){
        return;
    }
    array[id] = currentplayer
    el.innerText = currentplayer;
    check();
    currentplayer = currentplayer === firstplayer ? 'O' : firstplayer;
}