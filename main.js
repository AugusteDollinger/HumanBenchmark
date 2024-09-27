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
    addEventListener('click', clickEvent = function () {
        clearInterval(stopWatchInterval)
        showTime(time)
        reactionTimeScore(time)
        removeEventListener('click', clickEvent)
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
    document.getElementById('reactionTime').setAttribute('onclick', 'restartReactionTime()')
}
function restartReactionTime() {
    location.reload()
}
function reactionTimeScore(n) {
    let reactionTimeScores = {
    }
    if (sessionStorage.getItem('reactionTimeScore')) {
        let length = []
        reactionTimeScores = JSON.parse(sessionStorage.getItem('reactionTimeScore'))
        for (const key in reactionTimeScores) {
            length.push(key)
            console.log(reactionTimeScores[key])
        }
        console.log(reactionTimeScores)
        reactionTimeScores[length.length + 1] = n
        sessionStorage.setItem('reactionTimeScore', JSON.stringify(reactionTimeScores))
    }
    else {
        reactionTimeScores[1] = n
        console.log(reactionTimeScores)
        sessionStorage.setItem('reactionTimeScore', JSON.stringify(reactionTimeScores))
    }
} 