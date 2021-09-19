const startBtn = document.getElementsByClassName('startButton')[0];
const answerInp = document.querySelector('#answerInput');
const resetBtn = document.getElementsByClassName('resetButton')[0];

let num;
let evenNum = [];

function reloadInterval() {
    window.location.reload();
}

startBtn.addEventListener('click', getNum);
resetBtn.addEventListener('click', reloadInterval);



function getNum() {
    num = prompt('Введите число от 0 до 2000000: ');
    if(num > -1 && num <= 2000000){
            for (i = 0; i <= num ; i += 2) {
                evenNum.push(i);
                answerInp.value = ('Чётных чисел: ' + evenNum.length);
            } 
    } else {
        alert('Вы ввели неправильное число!');
    }
    
}
