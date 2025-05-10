let timeDisplay=document.getElementById('timer')
let time={
    days:0,
    hours:0,
    minutes:0,
    seconds:0
}
let seconds=time.seconds
let minutes=time.minutes
let hours=time.hours

setInterval(function(){
    seconds++
    if(seconds==60){
        minutes++
        seconds=0
    }
    displayTime()
},1000)

function displayTime(){
    if(minutes>0){
        timeDisplay.innerText=`time spent on system: ${minutes} minute(s) ${seconds} seconds(s)`
    }else{
        timeDisplay.innerText=`time spent on system: ${seconds} seconds(s)`
    }
}
