let ms=0,s=0,m=0;
let timer;

let stopwatche1 = document.querySelector('.stopwatch');

function start(){
    if(!timer){
        timer = setInterval(run,10);
    }
}

function run() {
    stopwatche1.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if(ms == 100){
        ms=0;
        s++;
    }    
    if(s==60){
        s=0;
        m++;
    }
}

function stop()
{
    clearInterval(timer);
    timer=false;
}

function reset()
{
    clearInterval(timer);
    timer=false;
    ms=0;
    s=0;
    m=0;
    stopwatche1.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}
