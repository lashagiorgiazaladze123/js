// random number

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * max) + min;
// console.log(randomNum);
const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 10000000;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() *max) + min; myLabel1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() *max) + min; myLabel2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() *max) + min; myLabel3.textContent = randomNum3;
}