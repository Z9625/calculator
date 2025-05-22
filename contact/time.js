let h1 = document.querySelector('#h1')
let stopBtn = document.querySelector('.stop')
let continueBtn = document.querySelector('.continue')
let time;


time = setInterval(() => {
    let now = new Date()
    let hour = now.getHours().toString().padStart(2, 0)
    let minute = now.getMinutes().toString().padStart(2, 0)
    let second = now.getSeconds().toString().padStart(2, 0)
    let millisecond = now.getMilliseconds().toString().padStart(2, 0).slice(0, 2)
    h1.textContent = `${hour}h : ${minute}m : ${second}s : ${millisecond}ms`;
}, 1);

continueBtn.disabled = true

stopBtn.addEventListener('click', () => {
    clearInterval(time)
    stopBtn.disabled = true
    continueBtn.disabled = false
})

continueBtn.addEventListener('click', () => {
    clearInterval();
    time = setInterval(() => {
        let now = new Date()
        let hour = now.getHours().toString().padStart(2, 0)
        let minute = now.getMinutes().toString().padStart(2, 0)
        let second = now.getSeconds().toString().padStart(2, 0)
        let millisecond = now.getMilliseconds().toString().padStart(2, 0).slice(0, 2)
        h1.textContent = `${hour}h : ${minute}m : ${second}s : ${millisecond}ms`;
    })
    stopBtn.disabled = false
    continueBtn.disabled = true
})
window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    let mainSection = document.querySelector(".main-section");


    setTimeout(() => {
        loader.style.display = "none";
        mainSection.style.display = "block";
    }, 1500);
});




let stopwatchBtn = document.querySelector('.stopwatch-btn')
let stopwatch = document.querySelector('.stopwatch')
let Times = document.querySelector('.time')
let stopwatchStartBtn = document.querySelector('.stopwatch-start')
let stopwatchStopBtn = document.querySelector('.stopwatch-stop')
let stopwatchRestartBtn = document.querySelector('.stopwatch-restart')

stopwatchBtn.addEventListener('click', () => {
    Times.classList.toggle('none')
    stopwatch.classList.toggle('none')
    stopBtn.style.display = 'none'
    continueBtn.style.display = 'none'
    stopwatchStartBtn.style.display = 'flex'
    stopwatchStartBtn.style.justifyContent = 'center'
    stopwatchStartBtn.style.alignItems = 'center'
    stopwatchStopBtn.style.display = 'flex'
    stopwatchStopBtn.style.justifyContent = 'center'
    stopwatchStopBtn.style.alignItems = 'center'
    stopwatchRestartBtn.style.display = 'flex'
    stopwatchRestartBtn.style.justifyContent = 'center'
    stopwatchRestartBtn.style.alignItems = 'center'
    if (Times.classList.contains('none')) {
        stopwatchBtn.textContent = 'Time'
        stopBtn.style.display = 'none'
        continueBtn.style.display = 'none'
        stopwatchRestartBtn.style.display = 'flex'
        stopwatchStartBtn.style.display = 'flex'
        stopwatchStopBtn.style.display = 'flex'
    } else {
        stopwatchBtn.textContent = 'Stopwatch'
        stopBtn.style.display = 'block'
        continueBtn.style.display = 'block'
        stopwatchRestartBtn.style.display = 'none'
        stopwatchStartBtn.style.display = 'none'
        stopwatchStopBtn.style.display = 'none'
    }
})



window.onload = function () {
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let Hours = document.querySelector('#hours')
    let Minutes = document.querySelector('#minutes')
    let Seconds = document.querySelector('#seconds')
    let Milliseconds = document.querySelector('#milliseconds')
    let Interval;

    // if (!Times.classList.contains('none')) {
    //     Milliseconds.textContent = '0ms'
    //     Seconds.textContent = '0s'
    //     Minutes.textContent = '0m'
    //     Hours.textContent = '0h'
    //     milliseconds = '0'
    //     seconds = '0'
    //     minutes = '0'
    //     hours = '0'
    // }


    stopwatchStartBtn.addEventListener('click', () => {
        clearInterval(Interval); // oldingi intervalni to'xtatish
        Interval = setInterval(() => {
            milliseconds++;
            if (milliseconds > 99) {
                seconds++;
                milliseconds = 0;
            } else if (seconds > 59) {
                minutes++
                seconds = 0
            } else if (minutes > 59) {
                hours++
                minutes = 0
            } else if (hours > 99) {
                clearInterval(Interval)
            }
            Milliseconds.innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds;
            Seconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
            Minutes.innerHTML = minutes < 10 ? '0' + minutes : minutes;
            Hours.innerHTML = hours < 10 ? '0' + hours : hours
            Milliseconds.innerHTML = `${milliseconds}ms`
            Seconds.innerHTML = `${seconds}s`
            Minutes.innerHTML = `${minutes}m`
            Hours.innerHTML = `${hours}h`
        }, 10);
    })

    stopwatchStopBtn.addEventListener('click', () => {
        clearInterval(Interval)
        stopwatchStartBtn.textContent = 'Continue'
        if ((milliseconds == '0' && seconds == '0' && minutes == '0' && hours == '0')) {
            stopwatchStartBtn.textContent = 'Start'
        }
    })

    stopwatchRestartBtn.addEventListener('click', () => {
        Milliseconds.textContent = '0ms'
        Seconds.textContent = '0s'
        Minutes.textContent = '0m'
        Hours.textContent = '0h'
        milliseconds = '0'
        seconds = '0'
        minutes = '0'
        hours = '0'
        stopwatchStartBtn.textContent = 'Start'
        clearInterval(Interval)
    })
};