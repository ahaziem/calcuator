// select the button in the caluator
const numberKeys = document.querySelectorAll(".number && .number-decimal");
const actionKey = document.querySelectorAll(".button-action");
const clearaction = document.querySelectorAll(".button-action-clear");
console.log(numberKeys)
console.log("hello")

//Make it interactive for each list of the numbers in the calculator
// document.getElementById(number).addEventListener("click", () => console.log ('clicked!'));
numberKeys.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
    }
})
// conduct the action of pressing the keys
const buttonkey = e.target
const actionbutton = buttonkey.dataset.actionbutton {
    if (actionbutton = null) {
        console.log(number-key)
    }
     if (actionbutton === "button-action') {
     )
     { console.log (operations-key)}

        if ( actionbutton === "button-action-clear" )
        {
            console.log (clear-key)
        }

        if (actionbutton === "number-decimal") {
            console.log (demical-key)
        }
