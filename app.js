const timer = document.querySelector('h2');
const btns = document.querySelectorAll('.btns button');

let second = 60;
let minute = 25;
let counter = null;

let displaySecond;
let displayMinute;

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
       btns.forEach(btn => {
        btn.classList.remove('active');
       })

       e.target.classList.add('active');

       e.target.id === "start" ? counter = setInterval(startCounter, 1000) : null;
       e.target.id === "stop" ? clearInterval(counter) : null;
       e.target.id === "reset" ? resetCounter() : null;
        })
    })
    
    function startCounter() {
        //    console.log("yes")
        second--;
        if(second === 0) {
            second = 60;
            minute--;
        }
        
        if(second < 10) {
            displaySecond = "0"+ second;
        } else {
            displaySecond = second;
        }
        
        if(minute < 10) {
            displayMinute = "0" + minute;
        } else {
            displayMinute = minute;
        }
        
        timer.textContent = `${displayMinute}:${displaySecond}`;
        // console.log(minute);
        // console.log(second);
        if(minute === 0) {
           clearInterval(counter);
           second = "00";
           minute = "00";
           timer.textContent = `${minute}:${second}`;
           btns.forEach(btn => {
             btn.style.pointerEvents = "none";
             btn.classList.add('active');
           })
        }
}

function resetCounter() {
    clearInterval(counter);
    second = 60;
    minute = 25;
    timer.textContent = "25:00"
}