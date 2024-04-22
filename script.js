const screenArray = [];

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    displayToScreen(0);
})

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    displayToScreen(1);
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    displayToScreen(2);
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    displayToScreen(3);
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    displayToScreen(4);
})

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    displayToScreen(5);
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    displayToScreen(6);
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    displayToScreen(7);
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    displayToScreen(8);
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    displayToScreen(9);
})

const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
    displayToScreen(".");
})

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
    if (findOperators(screenArray)) {
        let values = getValues(screenArray);
        let firstValue = values[0];
        let operator = values[1];
        let secondValue = values[2];
        operate(firstValue, operator, secondValue); 
        displayToScreen(" + ");
    } else {
        displayToScreen(" + ");
    }
})

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
    if (findOperators(screenArray)) {
        let values = getValues(screenArray);
        let firstValue = values[0];
        let operator = values[1];
        let secondValue = values[2];
        operate(firstValue, operator, secondValue);
        displayToScreen(" - ");
    } else {
        displayToScreen(" - ");
    }
})

const x = document.querySelector(".multiply");
x.addEventListener("click", () => {
    if (findOperators(screenArray)) {
        let values = getValues(screenArray);
        let firstValue = values[0];
        let operator = values[1];
        let secondValue = values[2];
        operate(firstValue, operator, secondValue);
        displayToScreen(" x ");
    } else {
        displayToScreen(" x ");
    }
})

const slash = document.querySelector(".divide");
slash.addEventListener("click", () => {
    if (findOperators(screenArray)) {
        let values = getValues(screenArray);
        let firstValue = values[0];
        let operator = values[1];
        let secondValue = values[2];
        operate(firstValue, operator, secondValue);
        displayToScreen(" / ");
    } else {
        displayToScreen(" / ");
    }
})

const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
    let values = getValues(screenArray);
    let firstValue = values[0];
    clearScreen();
    displayToScreen(divideOneHundred(firstValue));
})

const plusminus = document.querySelector(".plus-minus");
plusminus.addEventListener("click", () => {
    if (screenArray.length == 0 || findOperators(screenArray)) {
        displayToScreen("-");
    }
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearScreen();
})

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
    const screen = document.querySelector(".screen");
    screenArray.pop();
    screen.textContent = screenArray.join(" ");
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (findOperators(screenArray)) {
        let values = getValues(screenArray);
        let firstValue = values[0];
        let operator = values[1];
        let secondValue = values[2];
        operate(firstValue, operator, secondValue);      
    }
})

function displayToScreen(item) {
    const screen = document.querySelector(".screen");
    screenArray.push(item);
    screen.textContent = screenArray.join(" ");
}

function clearScreen() {
    const screen = document.querySelector(".screen");
    screenArray.length = 0;
    screen.textContent = 0;
}

function findOperators(array) {
    const operators = [" + ", " - ", " x ", " / ", " % "];
    return operators.some(operator => array.includes(operator));
}

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function divideOneHundred(x) {
    return x / 100;
}

function getValues(array) {
    let firstValue = "";
    let secondValue = "";
    let searchFirstValue = true;
    let operator = "";

    for (let i=0; i < array.length; i++) {
        let element = array[i];
        if (typeof element === "number" || element === "." || element === "-") {
            if (searchFirstValue) {
                firstValue += element;
            } else {
                secondValue += element;
            }
        } else {
            searchFirstValue = false;
            operator = element;
        }
    }

    if (firstValue.includes(".")) {
        firstValue = parseFloat(firstValue);
    } else {
        firstValue = parseInt(firstValue);
    }
    if (secondValue.includes(".")) {
        secondValue = parseFloat(secondValue);
    } else {
        secondValue = parseInt(secondValue);
    }

    return [firstValue, operator, secondValue];
}

function operate(firstValue, operator, secondValue) {
    if (operator == " + ") {
        let sum = add(firstValue, secondValue);
        screenArray.length = 0;
        displayToScreen(sum);
    } else if (operator == " - ") {
        let substraction = substract(firstValue, secondValue);
        screenArray.length = 0;
        displayToScreen(substraction);
    } else if (operator == " x ") {
        let multiplication = multiply(firstValue, secondValue);
        screenArray.length = 0;
        displayToScreen(multiplication);
    } else if (operator == " / ") {
        let division = divide(firstValue, secondValue);
        screenArray.length = 0;
        displayToScreen(division);
    }
}