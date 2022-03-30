// select the button in the caluator
const numberKeys = document.querySelectorAll(".number");
const demicalkey = document.querySelectorAll(".number-decimal");
const operationKey = document.querySelectorAll(".button-action");
const clearAction = document.querySelectorAll(".button-action-clear");
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
        console.log('demical-key')
    })
})

operationKey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
        console.log('operation-key')
    })
})

clearAction.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
        console.log('clear-key')
    })
})

// display the action of the calculator by pressing the button
const calculatorDisplay = document.querySelectorAll(".calcuator-display")

calculatorDisplay.addEventListener('click', (event) => {
    const target = e.target;

    if (!e.target.matches('button')) {
        return;
    }
    if (e.target.classLift.contains('number')) {
        return;
    }
    if (e.target.classLift.contains('number-decimal')) {
        return;
    }
    if (e.target.classLift.contains('button-action')) {
        return;
    }
    if (e.target.classLift.contains('button-action-clear')) {
        return;
    }
console.log (calculatorDisplay)
});