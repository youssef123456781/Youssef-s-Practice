let dCards = document.getElementById("dCards")
let yCards = document.getElementById("yCards")
let balance = document.getElementById("balance")
let betAmount = document.getElementById("betAmount")
let riskValue = document.getElementById("risk")
let resultWinner = document.getElementById("result")
resultWinner.innerText = "Start"

let cardsY = []
let cardsD = []
let yCardsSum = 0
let dCardsSum = 0
let extraC = 0
let balanceValue = 10000
balance.innerText = balanceValue
let totalRisk = 0
let ace = 11

function bet (){
    if(resultWinner.innerText === ""){
        resultWinner.innerText === ""
    } else {
        let betValue = Number(betAmount.value)
if(betValue <= balanceValue && betValue > 0) 
    {balanceValue -= betValue
balance.innerText = balanceValue
totalRisk += betValue
riskValue.innerText = totalRisk
resultWinner.innerText = "Start"}
else{
     resultWinner.innerText = "Input correct bet amount"
     riskValue.innerText = totalRisk
     totalRisk = 0
}
    }


}

function drawCards (){
    let cardValue = Math.floor (Math.random()*13) + 1
    if (cardValue >= 10) {
        return 10
    }
    else if (cardValue === 1) {
        return ace
    }
    else {
        return cardValue
    }
}

function extraCard (){
    //Draws extra card
    //Adds it to array and sum
    if(resultWinner.innerText === ""){
    let extraC = drawCards()
    yCardsSum += extraC
    cardsY.push(extraC)
    
    //Checks if youve gone past 21
    if (yCardsSum > 21){

        for(i = 0; i < cardsY.length; i++){
        if(cardsY[i] === 11 && yCardsSum > 21) {
           cardsY[i] = 1
           yCardsSum -=10
        }}
    yCards.innerText = cardsY.join("  ,  ") + "  :  " + yCardsSum
    } else{
            yCards.innerText = cardsY.join("  ,  ") + "  :  " + yCardsSum
        }

        if (yCardsSum > 21){
        balanceValue -= 0
    balance.innerText = balanceValue
    totalRisk = 0
    riskValue.innerText = totalRisk
    resultWinner.innerText = "You lose"}
     }
    
}

//Connects to Start Button
function start (){
    if(resultWinner.innerText === "Start" && totalRisk > 0){
if(resultWinner.innerText === ""){
        resultWinner.innerText === ""
    } else {
        resultWinner.innerText = ""
        ace = 11
        //If users bet is greater than 0
        //the draw cards function is triggered
    if(totalRisk > 0) {
    let firstCard = drawCards()
    let secondCard = drawCards()
    let thirdCard = drawCards()
    let fourthCard = drawCards()
    dCardsSum = firstCard + secondCard
    yCardsSum = thirdCard + fourthCard
    cardsD = [firstCard, secondCard]
    cardsY = [thirdCard, fourthCard]
    //Checks to see if the dealer needs to take more cards
if (dCardsSum >=17){
dCards.innerText = cardsD.join("  ,  ") + "  :  " + dCardsSum
 }  
else {
    //If the dealer does
    //He keeps on taking more cards until
    // the sum is greater than or equal to 17
    while(dCardsSum <17){
    let newCard = drawCards()
    dCardsSum += newCard
    cardsD.push(newCard)
        for(i = 0; i < cardsD.length; i++){
        if(cardsD[i] === 11 && dCardsSum > 21) {
           cardsD[i] = 1
           dCardsSum -=10
        }}
    dCards.innerText = cardsD.join("  ,  ") + "  :  " + dCardsSum
}
    }
yCards.innerText = cardsY.join("  ,  ") + "  :  " + yCardsSum
//If dealer exeeds 21 you win
if (dCardsSum > 21){
    balanceValue += 2 * totalRisk
    balance.innerText = balanceValue
    totalRisk = 0
    riskValue.innerText = totalRisk
    resultWinner.innerText = "You win"
}

    }
   
    }
} else {
    resultWinner.innerText === "Start"
}
    }
    
//Connects to Stand button
function stand(){
    //If statement checks if dealer is losing
    //If dealer is losing, the dealer continues to draw cards
    //If dealer is not, you just lose
        if(resultWinner.innerText === ""){
    if (dCardsSum < yCardsSum){
 while(dCardsSum < yCardsSum){
            newCard = drawCards()
    dCardsSum += newCard
    cardsD.push(newCard)
     for(i = 0; i < cardsD.length; i++){
        if(cardsD[i] === 11 && dCardsSum > 21) {
           cardsD[i] = 1
           dCardsSum -=10
        }}
    dCards.innerText = cardsD.join("  ,  ") + "  :  " + dCardsSum
} 
} else{
    balanceValue -= 0
    balance.innerText = balanceValue
    riskValue.innerText = totalRisk
    resultWinner.innerText = "You lose"}

    //If dealer loses whilst drawing cards you win
    //if not, you lose
    if (dCardsSum > 21){
    balanceValue += 2 * totalRisk
    balance.innerText = balanceValue
    riskValue.innerText = totalRisk
    resultWinner.innerText = "You win"
} else{
    balanceValue += 0
    balance.innerText = balanceValue
    riskValue.innerText = totalRisk
    resultWinner.innerText = "You lose"
}
if (dCardsSum === yCardsSum){
    balanceValue += 1 * totalRisk
    balance.innerText = balanceValue
    resultWinner.innerText = "You tie"
}
    totalRisk = 0
    riskValue.innerText = totalRisk
}}

//Connects to Restart Button
function restart(){
    balanceValue = 10000
    balance.innerText = balanceValue
    totalRisk = 0
    riskValue.innerText = totalRisk
    dCards.innerText = ""
    yCards.innerText = ""
    resultWinner.innerText = "Start"
}