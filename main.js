// reaction time 
let startTime = 0;
let clickTime = 0;
let timeText = document.getElementById('reactionTimeText')

function reactionTime() {
    timeText.innerText = ""
    document.getElementById('reactionTime').removeAttribute('onclick')
    timer()
}

function stopWatch() {
    let time = 0
    const stopWatchInterval = setInterval(() => {
        time++
        console.log(time)
    }, 10);
    addEventListener('click', () => {
        clearInterval(stopWatchInterval)
        showTime(time)
    })
}
function timer() {
    let timeLeft = Math.floor(Math.random() * 300 + 200)
    const timerInterval = setInterval(() => {
        timeLeft <= 0 ? (clearInterval(timerInterval), changeColor()) : timeLeft--
        console.log(timeLeft)
    }, 10);
}
function changeColor() {
    console.log("hello")
    document.getElementById('reactionTimeColor').style.backgroundColor = '#00CCDD'; 
    stopWatch();
} 
function showTime(n) {
    document.getElementById('reactionTimeColor').style.color = '#6439FF';
    (n+'').length == 1 ? timeText.innerText = `0.0${n}s` : (n+'').length == 2 ? timeText.innerText = `0.${n}s` : (n+'').length == 3 ? timeText.innerText = `${(n+'')[0]}.${(n+'')[1]}${(n+'')[2]}s` : timeText.innerText = "You can't be that slow"
}
