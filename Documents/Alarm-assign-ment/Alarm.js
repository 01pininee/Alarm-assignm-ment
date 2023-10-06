"use strict"
const currentTime = document.querySelector("h1");
const content = document.querySelector("content");
const selectMenu = document.querySelectorAll("select");
const setAlarmBtn = document.querySelector("button"); 

let alarmTime; 
 const isAlarmSet = false;
 let ringingtone = new Audio("./music/ringingtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);

}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM"
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    // getting hour, mins, secs
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    // adding 0 before hr, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText =`${h}:${m}:${s} ${ampm}`;

        if(alarmTime == `${h}:${m} ${ampm}`) {
            ringingtone.play();
            ringingtone.loop = true;
        }
}, 1000);

function setAlarm() {
    if(isAlarmSet) {  
        alarmTime = "";
        ringingtone.pause(); 
        // content.classList.replace("disable");
        setAlarmBtn.innerText = "Set alarm";
        // return isAlarmSet = false;
    }
    // getting hour, ninute, ampm select tag value
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if(time.includes("hours") || time.includes("minute") || time.includes("AM/PM")) {
        return alert("please, select a valid time to set alarm!");
    }
    // isAlarmSet = true;
    alarmTime = time;
    setAlarmBtn.innerText = "cle ar alarm";
}
setAlarmBtn.addEventListener("click", setAlarm);

function clearAlarm() {
    if(!isAlarmSet) {  
        alarmTime = "";
        ringingtone.pause(); 
        // content.classList.replace("disable");
        setAlarmBtn.innerText = "Set alarm";
        // return isAlarmSet = false;
        // ringingtone = "stop"
    }
    // getting hour, ninute, ampm select tag value
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if(time.includes("hours") || time.includes("minute") || time.includes("AM/PM")) {
        return alert("please, select a valid time to set alarm!");
    }
    // isAlarmSet = true;
    alarmTime = time;
    setAlarmBtn.innerText = "clear alarm";
}
setAlarmBtn.addEventListener("click", clearAlarm );