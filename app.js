let calculator = new Calculator()
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const power = document.querySelector('.power');

const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');

const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = 'null';
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
        console.log(dis2Num);
    })
});

operationEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            calculator.mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        calculator.clearVar(operationName);
        lastOperation = operationName;
    })
});



equalEl.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) return;
    haveDot = false;
    calculator.mathOperation();
    calculator.clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearAllEl.addEventListener('click', (e) => {
    display1El.innerText = '0';
    display2El.innerText = '0';
    dis1Num = '';
    result = '';
    tempResultEl.innerText = '0 ';
});

clearLastEl.addEventListener('click', (e) => {
    display2El.innerText = '';
    dis2Num = '';
});


power.addEventListener('click', function() {
    clearAllEl.addEventListener('click', (e) => {
        display1El.innerText = '0';
        display2El.innerText = '0';
        dis1Num = '';
        result = '';
        tempResultEl.innerText = '0 ';
    });

})

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonElement(e.key);
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');
    } else if (e.key == 'Enter' || e.key === '=') {
        clickEqual();
    }
});


function clickButtonElement(key) {
    numbersEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickEqual() {
    equalEl.click();
}