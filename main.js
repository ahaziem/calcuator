// select the button in the caluator
const numberKeys = document.querySelectorAll(".number");
const actionKey = document.querySelectorAll(".button-action");
const clearaction = document.querySelectorAll(".button-action-clear");
console.log(numberKeys)
console.log("hello")
//Make it interactive so does 

// document.getElementById(number).addEventListener("click", () => console.log ('clicked!'));
numberKeys.forEach( element => {

    element.addEventListener( "click", (e) => {
        console.log( e.target );
    });

});