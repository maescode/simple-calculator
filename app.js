let display = document.querySelector('#operand');
display.innerHTML = "";

let one = document.querySelector('#one');
one.addEventListener('click', function() {
    display.innerHTML += 1;
});

let two = document.querySelector('#two');
two.addEventListener('click', function() {
    display.innerHTML += 2;
})

let three = document.querySelector('#three');
three.addEventListener('click', function() {
    display.innerHTML += 3;
});

let four = document.querySelector('#four');
four.addEventListener('click', function() {
    display.innerHTML += 4;
});

let five = document.querySelector('#five');
five.addEventListener('click', function() {
    display.innerHTML += 5;
});

let six = document.querySelector('#six');
six.addEventListener('click', function() {
    display.innerHTML += 6;
});

let seven = document.querySelector('#seven');
seven.addEventListener('click', function() {
    display.innerHTML += 7;
});

let eight = document.querySelector('#eight');
eight.addEventListener('click', function() {
    display.innerHTML += 8;
});