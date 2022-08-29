let info = prompt("Lütfen adınızı ve soyadınızı giriniz:")

let myName = document.querySelector("#myName")

myName.innerHTML = info

var today = new Date(); var time = today. getHours() + ":" + today

let clock = document.querySelector("#myClock")
console.log(today)
clock.innerHTML = `Şu an tarih :${today}`