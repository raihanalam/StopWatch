let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeDisplay = document.querySelector('#timer');
let interval;

let startBtn = document.querySelector('#start-btn');
let stopBtn = document.querySelector('#stop-btn');
let resetBtn = document.querySelector('#reset-btn');


startBtn.addEventListener('click',()=>{
    resetTime();
    interval = setInterval(startTimer,10);
});
stopBtn.addEventListener('click',stopTimer);
resetBtn.addEventListener('click',resetTime);

function resetTime(){
    clearInterval(interval);
    [miliseconds,seconds,minutes,hours]=[0,0,0,0];
    timeDisplay.innerHTML = '00 : 00 : 00 : 000';

}
function stopTimer(){
    clearInterval(interval);
}

function startTimer(){
    miliseconds+=10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds==60){
            seconds= 0;
            minutes++;

            if(minutes==60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes <10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms  = miliseconds < 10 ? "00"+miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    timeDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}