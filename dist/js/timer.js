let timerMinutes = 1;
let timerSeconds = 0;

let mytime = setInterval(function(){
    if (timerMinutes === 0 && timerSeconds === 0) {
        clearInterval(mytime);
        alert("Time's up!");
    } else {
        if (timerSeconds > 0) {
            timerSeconds--;
        } else if (timerMinutes > 0) {
            timerSeconds = 59;
            timerMinutes--;
        }

        let formatted_sec = timerSeconds < 10 ? `0${timerSeconds}` : `${timerSeconds}`;
        let formatted_min = timerMinutes < 10 ? `0${timerMinutes}` : `${timerMinutes}`;

        document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }
}, 1000);
