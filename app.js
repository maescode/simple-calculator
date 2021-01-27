 let cal = new Calculator();

 const buttons = document.querySelectorAll('button');

 const display = document.querySelector('#operands');

 buttons.forEach(function(button) {
     button.addEventListener('click', calculate);
 });

 function calculate(event) {

     const clickedButtonValue = event.target.value;

     if (clickedButtonValue === '=') {

         if (display.value !== '') {

             document.querySelector('#ans').innerHTML = cal.calculate(display.value);
         }
     } else if (clickedButtonValue === 'C') {

         display.value = '';
         document.querySelector('#ans').innerHTML = '';
     } else {
         display.value += clickedButtonValue;
     }
 }