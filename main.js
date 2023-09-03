let scoreA = document.querySelector("#scoreA")
let scoreB = document.querySelector("#scoreB")
let plus = document.querySelector("#increase")
let double = document.querySelector("#double")
let doubleB = document.querySelector("#doubleB")
let triple = document.querySelector("#triple")
let saveHolder = document.querySelector("#save")
// let secondSave = document.querySelector("#secondSave")
let saveAScore = document.querySelector("#saveAScore")
let saveBScore = document.querySelector("#saveBScore")

let scoreHolder = 0
   
let scoreBHolder = 0



function incrementPlusA() {
    scoreHolder.value = ""
    scoreHolder += 1
    scoreA.textContent = scoreHolder
    console.log(scoreA)
}

incrementPlusA()


function incrementPlusB() {
    scoreBHolder += 1
    scoreB.textContent = scoreBHolder
    console.log(scoreB)
}

incrementPlusB()


function doubleIncrement() {
    scoreHolder += 2
    scoreA.textContent = scoreHolder
    console.log(scoreA)
}

doubleIncrement()

function doubleIncrementB() {
    scoreBHolder += 2
    scoreB.textContent = scoreBHolder
    console.log(scoreB)
}

doubleIncrementB()

function tripleIncrement() {
    scoreHolder += 4
    scoreA.textContent = scoreHolder
    console.log(scoreA)
}

tripleIncrement()

function tripleIncrementB() {
    scoreBHolder += 4
    scoreB.textContent = scoreBHolder
    console.log(scoreB)
}

tripleIncrementB()


function save() {
    let saveIncrement = scoreHolder + " - "
    scoreA.textContent = 0
    // saveAScore.textContent = 0  //{This comes in as an update for the App}
    scoreHolder = 0
    saveAScore.textContent += saveIncrement
    console.log(scoreHolder)
}

save()

function secondSave() {
    let saveIncrement = scoreBHolder + " - "
    scoreB.textContent = 0
   // saveBScore.textContent = 0  //{This comes in as an update for the App}
    scoreBHolder = 0
    saveBScore.textContent += saveIncrement
    console.log(scoreBHolder)
}

secondSave()