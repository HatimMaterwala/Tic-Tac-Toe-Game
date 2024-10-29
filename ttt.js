let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let messageContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')
let count = 0;
let turnO = true;

// 2D - Array
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[3,4,5],[6,7,8],[2,5,8]];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    messageContainer.classList.add('hide');
    count = 0;
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('Box was clicked');
        if(turnO){  
            box.innerText = "O";
            box.style.color = '#800080';
            // box.innerHTML = "<b style = 'color: pink';>O</b>"
            turnO = false;
        }
        else{
            box.innerText = "X"; 
            box.style.color = '#008080';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

const enableBoxes = () => {
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = '';
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    messageContainer.classList.remove('hide');
    disableBoxes();
}

const showTie = () => {
    msg.innerText = `Game Tied!!`;
    messageContainer.classList.remove('hide');
    disableBoxes();
}

const checkWinner = () => {
    count++;
    console.log(`${count}`);
    for(let patterns of winPatterns){
    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    
    if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log('Winner - ',pos1Val);
            showWinner(pos1Val);
        }
        else{
            if(count === 9){
                showTie();
            }
        }
}

}
}

newGameBtn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);



