function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    if (operator === `*`) {
        return multiply(a,b)
    }
    else if (operator == '-') {
        return subtract(a,b)
    }
    else if (operator == '/') {
        return divide(a,b)
    }
    else if (operator == '+') {
        return add(a,b)
    }
}

let buttonNums = [0,1,2,3,4,5,6,7,8,9]
let calc = document.getElementById('calculatorBody')
let buttonHolder = document.getElementById('buttonHolder')
let numButtons = document.getElementById('numButtons')
let display = document.getElementById('display')
let displayValue = '';
let subtractButton = document.getElementById('subtract')
subtractButton.addEventListener('click', getNumA)
let addButton = document.getElementById('add')
addButton.addEventListener('click', getNumA)
let divideButton = document.getElementById('divide')
divideButton.addEventListener('click', getNumA)
let multiplyButton = document.getElementById('multiply')
multiplyButton.addEventListener('click', getNumA)
display.innerText = displayValue;

let a;
let b;
let currentOperator = '';

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

let deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', deleteLast)




for (let i = 1; i < 10; i++) {

    let newButton = document.createElement('button');
    newButton.innerText = buttonNums[i];
    newButton.classList.add('numButton', 'button');
    newButton.value = i;
    newButton.addEventListener('click',addValue)
    numButtons.append(newButton);

    if(i == 9){
        let zeroButton = document.createElement('button');
        zeroButton.innerText = 0
        zeroButton.classList.add('numButton', 'button');
        zeroButton.value = 0;
        zeroButton.addEventListener('click', addValue)
        numButtons.appendChild(zeroButton)
        let dotButton = document.createElement('button');
        dotButton.innerText = '.'
        dotButton.classList.add('numButton', 'button');
        dotButton.value = '.'
        dotButton.addEventListener('click', addDot)
        numButtons.appendChild(dotButton)
    }
    
}


function deleteLast(){

    let newDisplayValue = displayValue.slice(0,-1);
    displayValue = newDisplayValue;
    display.innerText = displayValue;

}

let equalButton = document.getElementById('equal');
equalButton.addEventListener('click', equalsTo)

function equalsTo() {
    let parsedInt = parseFloat(displayValue);
    b = parsedInt

    if ((b == 0) && (currentOperator == '/')) {
        alert( `Nope! Can't divide by 0 silly duck!`);
        return;
    }
    else {
    let answer = operate(a,b,currentOperator)
    answer = Number(answer.toFixed(4));
    displayValue = answer
    display.innerText = displayValue
    currentOperator = ''
    }
    
}




function getNumA() {

    let parsedInt = parseFloat(displayValue)
    a = parsedInt
    currentOperator = this.value
    displayValue = ''
    display.innerText = ''
}

function addDot() {
    if (displayValue.includes('.') == false) {
    let value = this.value;
    displayValue = displayValue + value;
    display.innerText = displayValue
    }
    else {
        return;
    }
    

}

function addValue() {

    let value = this.value;
    displayValue = displayValue + value;
    display.innerText = displayValue
    

}

function clear() {
    display.innerText = ''
    displayValue = ''
    currentOperator = ''
}



calc.appendChild