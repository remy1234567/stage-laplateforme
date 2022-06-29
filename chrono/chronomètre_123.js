let hour = 0
let minute = 0
let second = 0
let milisecond = 0
let lap = 1
let stop = false
let ms_1 = 0
let ms_2 = 0
let scd_1 = 0
let scd_2 = 0
min_1 = 0
min_2 = 0
hr_1 = 0
hr_2 =0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function chrono() {
    if (stop === true)
        return;
    ms_1 = ms_1 + 1
    if (ms_1 > 9) {
        ms_2 = ms_2 + 1
        ms_1 = 0
    }
    if (ms_2 > 9)
    {
        ms_2 = 0
        scd_1 = scd_1 + 1
    }
    
    if (scd_1 > 9) {
       scd_2 = scd_2 + 1
       scd_1 = 0
    } 
    if(scd_2 === 6){
      scd_2 = 0
      min_1 = min_1 + 1
    }
    
    if (min_1 > 9) {
        min_2 = min_2 + 1
        min_1 = 0
    }
       
    if(min_2 === 6)
     {
      min_2 = 0  
      hr_1 = hr_1 + 1
     }
    
     if(hr_1 > 9){
     hr_2 = hr_2 + 1
     hr_1 = 0
    }
    if(hr_2 === 2)
    {
        hr_2 = 0
    }
    
    milisecond = ms_2.toString() + ms_1.toString()
    second = scd_2.toString() + scd_1.toString()
    minute = min_2.toString() + min_1.toString()
    hour = hr_2.toString() + hr_1.toString()
    document.getElementById("milisecond").innerHTML = milisecond
    document.getElementById("second").innerHTML = second
    document.getElementById("minute").innerHTML = minute
    document.getElementById("hour").innerHTML = hour


    await sleep(9)
    chrono()
}

function start() {
    alert("chronomètre lancé")
    stop = false
    chrono()
}
function pause() {
    alert("chronomètre mis sur pause")
    stop = true;

}
function reset() {
    alert(" recommencer le chronomètre ")
    milisecond = 0
    second = 0
    minute = 0
    hour = 0
    document.getElementById("milisecond").innerHTML = milisecond
    document.getElementById("second").innerHTML = second
    document.getElementById("minute").innerHTML = minute
    document.getElementById("hour").innerHTML = hour

}

function tour() {
    let tour_group = document.getElementById("tour_group")
    tour_group.innerHTML += '<span> Tour ' + lap + ": " + hour +' h ' + minute + ' m ' + second + ' s '+ milisecond + ' ms ' + '</span>'
    lap += 1;
}
