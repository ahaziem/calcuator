// select the button in the caluator
const numberKeys = document.querySelectorAll(".number");
const demicalkey = document.querySelectorAll(".number-decimal");
const actionKey = document.querySelectorAll(".button-action");
const clearaction = document.querySelectorAll(".button-action-clear");
// console.log(numberKeys)


//Make it interactive for each list of the numbers in the calculator
// document.getElementById(number).addEventListener("click", () => console.log ('clicked!'));
numberKeys.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) { 
        }
        console.log(e.target.innerHTML)
    })
})

demicalkey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) { 
        }
        console.log(demical-key)
    })
})

actionKey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) { 
        }
        console.log(action-key)
    })
})

clearaction.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) { 
        }
        console.log(clear-key)
    })
})



