// reaction time
const $timeText = $('#reactionTimeText');

$('#reactionTime').on('click', reactionTime);

function reactionTime() {
    $timeText.text("");
    $('#reactionTime').off('click');
    timer();
}

function stopWatch() {
    let time = 0;
    const stopWatchInterval = setInterval(() => {
        time++;
        console.log(time);
    }, 10);
    const clickEvent = function () {
        clearInterval(stopWatchInterval);
        showTime(time);
        reactionTimeScore(time);
        $(document).off('click', clickEvent);
    };
    $(document).on('click', clickEvent);
}

function timer() {
    let timeLeft = Math.floor(Math.random() * 300 + 200);
    $('#reactionTime').on('click',
        () => {
            $('#reactionTime').off('click');
            setTimeout(() => {$('#reactionTime').on('click', restartReactionTime)}, 1000)
            clearInterval(timerInterval);
            $timeText.text("Too early!");
    });
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            changeColor();
        } else {
            timeLeft--;
        }

        console.log(timeLeft);
    }, 10);
}

function changeColor() {
    console.log("hello");
    $('#reactionTimeColor').css('background-color', '#00CCDD');
    stopWatch();
}

function showTime(n) {
    $('#reactionTimeColor').css('color', '#6439FF');
    if (n < 10) {
        $timeText.text(`0.0${n}s`);
    } else if (n < 100) {
        $timeText.text(`0.${n}s`);
    } else if (n < 1000) {
        $timeText.text(`${Math.floor(n / 100)}.${n % 100}s`);
    } else {
        $timeText.text("You can't be that slow");
    }
    setTimeout(() => {$('#reactionTime').on('click', restartReactionTime)}, 1000)
}

function restartReactionTime() {
    location.reload();
}

function reactionTimeScore(n) {
    let reactionTimeScores = {};
    if (sessionStorage.getItem('reactionTimeScore')) {
        reactionTimeScores = JSON.parse(sessionStorage.getItem('reactionTimeScore'));
        reactionTimeScores[Object.keys(reactionTimeScores).length + 1] = n;
    } else {
        console.log(n)
        reactionTimeScores[1] = n;
    }
    sessionStorage.setItem('reactionTimeScore', JSON.stringify(reactionTimeScores));
}
