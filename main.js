let counEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

count = 0

function increment(){
    count = count +1;
    counEl.textContent = count
}

function save(){
    let standEl = count + " - ";
    saveEl.textContent += standEl;
    counEl.textContent = 0;
    count =0 
}


let purchaseEl = document.getElementById("purchase-el")

function purchase(){
    console.log(purchaseEl)
    purchaseEl.textContent = "Something went wrong, please try again"
}


num1=8
num2=2
document.getElementById("num1-el").textContent =num1;
document.getElementById("num2-el").textContent =num2;


let sumEl = document.getElementById("sum-el");


 function add(){
     let result = num1 + num2
     sumEl.textContent = "Sum:" + result
 }

 function substract(){
    let result = num1 - num2
    sumEl.textContent = "Sum:" + result
}

function divided(){
    let result = num1 / num2
    sumEl.textContent = "Sum:" + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum:" + result
}


let age = 145

if(age < 100){
    console.log("Not elegible")
}else if(age === 100){
    console.log("Here is your birthday card from the king")
}else{
    console.log("Not elegible, you have already gotten one")
}

let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard +2
let hasBlackjack = false
let isAlive = true

if(sum <= 20){
    console.log("Do you want to draw a new card?")
    isAlive = false
}else if(sum === 21){
    console.log("Wohoo! You've got Blackjack!")
    hasBlackjack = true
}else{
    console.log("You'ar out of the game!")
}

console.log(hasBlackjack)
console.log(isAlive)











































































































































