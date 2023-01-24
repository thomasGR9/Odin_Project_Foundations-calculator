const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const divis = document.querySelector('#divis');
const clear = document.querySelector('.clearButton');
const delet = document.querySelector('.deleteButton');
const displayContainer = document.querySelector('.displayPlace');



function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    return sum;
}

function subtract(num1, num2) {
    let x = num1 - num2 ;
    console.log(x);
    return x;
}

function multiply(num1, num2) {
    let x = num1 * num2 ;
    console.log(x);
    return x;
}

function divide(num1, num2) {
    let x = num1 / num2 ;
    console.log(x);
    return x;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1, num2);
    }
}

function display(number) {
    const numbersInDisplay = displayContainer.querySelectorAll('div');
    let numberhere = 1;
    for (const item of numbersInDisplay) {
        numberhere += 1;
    }

   

    if (numberhere <= 12) {
        if (number =='clear') {
            while (displayContainer.firstChild) {
                displayContainer.removeChild(displayContainer.firstChild);
        }}
        else if (number == 'delete') {
            displayContainer.removeChild(displayContainer.firstChild);
        }
        else if (number != 'clear' || number != 'delete') {
            const content = document.createElement('div')
            content.textContent = number;
            displayContainer.insertBefore(content, displayContainer.firstChild);
    }}

    else {
        return;
    }

    
}

one.addEventListener('click', () => {
return display('1');
})

two.addEventListener('click', () => {
return display('2');
})

three.addEventListener('click', () => {
return display('3');
}) 

four.addEventListener('click', () => {
 return display('4');
 })


 five.addEventListener('click', () => {
return display('5');
})
 
    
six.addEventListener('click', () => {
 return display('6');
})
        
        

seven.addEventListener('click', () => {
 return display('7');
   }) 




eight.addEventListener('click', () => {
    return display('8');
    })



nine.addEventListener('click', () => {
    return display('9');
     })
        


 clear.addEventListener('click', () => {
     return display('clear');
        })
    

delet.addEventListener('click', () => {
    return display('delete');
       })