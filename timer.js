let timeDisplay=document.getElementById('timer')
let time={
    hours:0,
    minutes:0,
    seconds:0
}
let seconds=time.seconds
let minutes=time.minutes
let hours=time.hours
let timer=setInterval(function(){
    seconds++
    time.seconds=seconds
    if(minutes==60){
        hours++
        time.hours=hours
        minutes=0
    }else if(seconds==60){
        minutes++
        time.minutes=minutes
        seconds=0
        time.seconds=seconds
    }
    displayTime()
    let timeData=JSON.stringify(time)
    sessionStorage.setItem("sessionTime",timeData)
},1000)

function displayTime(){
    if(hours>0){
        timeDisplay.innerText=`time spent on system: ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`
    }
    else if(minutes>0){
        timeDisplay.innerText=`time spent on system: ${minutes} minute(s) ${seconds} second(s)`
    }else{
        timeDisplay.innerText=`time spent on system: ${seconds} second(s)`
    }
}

window.addEventListener('beforeunload',()=>{
    clearInterval(timer)
})