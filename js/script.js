//DOM ELEMENTS
const timerElm = document.getElementById('timer')
const timerMsgElm = document.getElementById('timerMsg')
const tableSectionElm = document.getElementById('tableSection')

const tablePickElm = document.getElementById('tablePick')
const num1Elm = document.getElementById('num1')
const num2Elm = document.getElementById('num2')
const num3Elm = document.getElementById('num3')
const num4Elm = document.getElementById('num4')
const num5Elm = document.getElementById('num5')

const userPickElm = document.getElementById('userPick')
const userNum1Elm = document.getElementById('userNum1')
const userNum2Elm = document.getElementById('userNum2')
const userNum3Elm = document.getElementById('userNum3')
const userNum4Elm = document.getElementById('userNum4')
const userNum5Elm = document.getElementById('userNum5')

const actionBtnElm = document.getElementById('submit')
const gameResultElm = document.getElementById('gameResult')

//VARIABLES

const tablePlayCont =[num1Elm, num2Elm, num3Elm, num4Elm, num5Elm]
const tablePlay =[]
const userPlay =[]
const userResult =[]

//DOM EVENTS

// generazione numeri casuali
for (let i = 0; i <= 4; i++){
    const currentNum = Math.floor(Math.random() * 99 - 1) + 1
    
    tablePlay.push(currentNum)
    tablePlayCont[i].innerHTML = tablePlay[i]
    console.log(i, tablePlay[i], currentNum)
}


//FUNCTIONS

//TIMER FUNCTION
//funzione che attiva un countdown di 30 secondi 
let seconds = 30
const intervalCountDown = setInterval(() => {

    //SE il countdown arriva a 0 visualizza i messaggi e il form di inserimento dei numeri
    if (seconds === 0){
        timerElm.innerHTML ="Tempo scaduto!"
        timerMsgElm.innerHTML = (`Ora inserisci i numeri che ricordi`)
        tablePickElm.classList.add("d-none")
        userPickElm.classList.remove("d-none")
        
    //ALTRIMENTI diminuisci di un unità il counter del countdown
    } else {
        timerElm.innerHTML = seconds
        seconds--
    }
}, 1000)

 //FORM FUNCTION
 //funzione che restituisce in una stringa di numeri i valori inseriti dall'utente 
 userPickElm.addEventListener("submit", function(event){
    event.preventDefault()

    userPlay.push(Number(userNum1Elm.value))
    userPlay.push(Number(userNum2Elm.value))
    userPlay.push(Number(userNum3Elm.value))
    userPlay.push(Number(userNum4Elm.value))
    userPlay.push(Number(userNum5Elm.value))
    
    //ciclo di controllo per verificare la coincidenza dei numeri dell'user con quelli del tavolo di gioco
    for(let i = 0; i <= 4; i++){

        if( userPlay.includes(tablePlay[i])){
            userResult.push(tablePlay[i])
        }
    }

    //Output del risultato ottenuto dall'utente dopo il click del bottone
    gameResultElm.classList.remove("d-none")
    gameResultElm.classList.add("text-bg-success")
    if (userResult.length > 0){
        gameResultElm.innerHTML = (`Il tuo punteggio è: ${userResult.length}, i tuoi nmeri indovinati : ${userResult} `)
    } else if (userResult.length === 0) {
        gameResultElm.innerHTML = (`Nessun numero indovinato :( `)
    }

    console.log(userPlay, tablePlay)
    console.log(userResult)
    })

