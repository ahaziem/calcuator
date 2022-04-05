// select the button in the caluator
const numberKeys = document.querySelectorAll(".number");
const demicalkey = document.querySelectorAll(".number-decimal");
const operationKey = document.querySelectorAll(".button-action");
const clearAction = document.querySelector(".button-action-clear");
const calculatorDisplay = document.querySelector(".calcuator-display")
// console.log(numberKeys)
console.log(clearAction)

//Make it interactive for each list of the numbers in the calculator

numberKeys.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
// display the action of the calculator by pressing the button
        console.log(e.target.innerHTML)
        console.log( calculatorDisplay.innerHTML );
        const newValue = calculatorDisplay.innerHTML + e.target.innerHTML;
        calculatorDisplay.innerHTML = newValue;
    })
})

demicalkey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
        console.log('demical-key')
    })
})

// operationKey.forEach(element => {
//     element.addEventListener("click", (e) => {
//         if (e.target.matches('button')) {
//         }
//         console.log('operation-key')
//     })
// })

// clearAction.forEach(element => {
//     element.addEventListener("click", (e) => {
//         if (e.target.matches('button')) {
//         }
//         console.log('clear-key')
//     })
// })


// press on the clear button and the display is cleared
clearAction.addEventListener("click", () => {
    calculatorDisplay.innerHTML = "";
  });

    // press on the operation key and the display is cleared

//   operationKey.forEach(element => {
//     element.addEventListener("click", () => {
//         calculatorDisplay.innerHTML = "+"||"-"||"x"||"÷"|| "="
// });

// display the action of the calculator by pressing the button (the operation e.g. x)

  operationKey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
        console.log(e.target.innerHTML)
        console.log( calculatorDisplay.innerHTML );
        const newoperation = calculatorDisplay.innerHTML + e.target.innerHTML;
        calculatorDisplay.innerHTML = newoperation;
    })
})
// display the action of the calculator by pressing the demical button

demicalkey.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.matches('button')) {
        }
        console.log(e.target.innerHTML)
        console.log(calculatorDisplay.innerHTML );
        const newdemical = calculatorDisplay.innerHTML + e.target.innerHTML;
        calculatorDisplay.innerHTML = newdemical;
    })
})
// press a number then store the number and press the operation key (+/- etc)
//press another number to produce the data

// operationKey.forEach(operator => {
//     operator.addEventListener("click", () => {
//      console.log(operatorKey.innerHTML);
// if (calcuator-display.innerHTML != '0') {
// const numberStore = numberKeys.innerHTML + operationKey.innerHTML }
// else ( numberKeys.innerHTML = "NULL")
// }

// operationKey.forEach(operator => {
//     operator.addEventListener("click", () => {
//      console.log(operator.innerHTML);
//      if (display.innerHTML != '0') {
//        storedNumber  += operator.innerHTML
//        console.log(storedNumber)
//      } else {
//        number.innerHTML = "ERROR";
//      }
//      display.innerHTML = "";
//    })
//    })

// operationKey.forEach(operator => {
//operationKey.addEventListener("click",(number) => {
//   switch {
//         case ""
//     }
//     calculatorDisplay.innerHTML =

// numberKeys.forEach(element => {
//     element.addEventListener("click", (e) => {
//         if (e.target.matches('button')) {
//         }
// // display the action of the calculator by pressing the button
//         console.log(e.target.innerHTML)
//         console.log( calculatorDisplay.innerHTML );
//         const newValue = calculatorDisplay.innerHTML + e.target.innerHTML;
//         calculatorDisplay.innerHTML = newValue;
//     })
// })

// const equal = numberKeys.innerHTML + operationKey.innerHTML
// const firstNumber = numberKeys
// const secondNumber = numberKeys

// numberKeys.forEach(element => {
//         element.addEventListener("click", (e) => {       
// case '-':
//     return console.log(calculatorDisplay = firstNumber - secondNumber)
//     case '+':
//         return console.log(calculatorDisplay = firstNumber + secondNumber)
//     case '*':
//         return console.log(calculatorDisplay = firstNumber * secondNumber)
//     case '/':
//     return console.log(calculatorDisplay = firstNumber / secondNumber)
//     case '%':
//     return console.log(calculatorDisplay = firstNumber * 0.01) || console.log(calculatorDisplay = secondNumber * 0.01)
//             }

            // const calculatoroperation = numberKeys.forEach(element => {
            //             element.addEventListener("click", (numberKeys, operationKey) => {
            //     if (operationKey === '+') return calculatorDisplay = numberKeys + numberKeys;
            //     if (operationKey === '-') return calculatorDisplay = numberKeys - numberKeys;
            //     if (operationKey === '*') return calculatorDisplay = numberKeys * numberKeys;
            //     if (operationKey === '/') return calculatorDisplay = numberKeys === 0 ? "Can't divide by 0!" : numberKeys / numberKeys;
            
            //     console.log(calculatorDisplay)
            
            // }

                    