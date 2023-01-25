const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const multi = document.querySelector('#multi');
const divis = document.querySelector('#divis');
const clear = document.querySelector('.clearButton');
const delet = document.querySelector('.deleteButton');
const displayContainer = document.querySelector('.displayPlace');
const upperDisplay = document.querySelector('.upperDisplay');
const downDisplay = document.querySelector('.bottomDisplay');

let pickedNum1 = "";
let pickedNum2 = "";
let pickedOperator = "";
let arr = [];
let anotherArr = [];


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
    const numbersInDisplay = downDisplay.querySelectorAll('div');
    let numberhere = 1;
    for (const item of numbersInDisplay) {
        numberhere += 1;
    }

   

    if (numberhere < 10) {
        if (number =='clear') {
            while (downDisplay.firstChild) {
                downDisplay.removeChild(downDisplay.firstChild);       
        }
        while (upperDisplay.firstChild) {
            upperDisplay.removeChild(upperDisplay.firstChild);       
    }

             pickedNum1 = "";
             pickedNum2 = "";
             pickedOperator = "";
             arr = [];
             anotherArr = [];
    }
        else if (number == 'delete') {
            downDisplay.removeChild(downDisplay.firstChild);
        }
        else if (number == '+' || number == "-" || number == "*" || number == "/") {
            for (const nums of numbersInDisplay) {
                arr.push(document.getElementById('theDiv').innerHTML);
                downDisplay.removeChild(downDisplay.firstChild);
            }     
            for (let i = (arr.length-1); i >= 0; i--) {
                pickedNum1 += arr[i];
            }
            const upperText = document.createElement('div');
            upperText.textContent = pickedNum1 + pickedOperator;
           
            upperText.style.fontSize = '50px'
            upperDisplay.insertBefore(upperText, upperDisplay.firstChild);     
                 return pickedNum1; 
       }

       else if (number == '=') {
        for (const numss of numbersInDisplay) {
            anotherArr.push(document.getElementById('theDiv').innerHTML);
            downDisplay.removeChild(downDisplay.firstChild);
        }   
        for (let i = (anotherArr.length-1); i >= 0; i--) {
            pickedNum2 += anotherArr[i];
        }
        console.log(arr);
        console.log(anotherArr);
                 console.log(pickedNum1);
                 console.log(pickedNum2);
                 console.log(pickedOperator); 
        let x1 = +pickedNum1;
        let x2 = +pickedNum2;
        let x3;
        if (pickedOperator == "+") {
             x3 = add(x1, x2);
            if (x3 > 999999999) {
                x3 = "Too big";
            }
            const result = document.createElement('div');
            result.textContent = x3;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        else if (pickedOperator == "-") {
             x3 = subtract(x1, x2);
            if (x3 > 999999999) {
                x3 = "Too big";
            }
            const result = document.createElement('div');
            result.textContent = x3;
            downDisplay.insertBefore(result, downDisplay.firstChild);    
        }
        else if (pickedOperator == "*") {
             x3 = multiply(x1, x2);
            if (x3 > 999999999) {
                x3 = "Too big";
            }
            const result = document.createElement('div');
            result.textContent = x3;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        else if (pickedOperator == "/") {
             x3 = divide(x1, x2);
            let x4 = x3;
            if (x4 > 999999999) {
                x4 = "Too big";
            }
            if (!(Number.isInteger(x3))) {
                x4 = x3.toFixed(5);
            }
            const result = document.createElement('div');
            result.textContent = x4;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        const upperTextAgain = document.createElement('div');
            upperTextAgain.textContent = `${pickedNum2} = `;
            
            upperTextAgain.style.fontSize = '50px'
            upperDisplay.insertBefore(upperTextAgain, upperDisplay.firstChild);

    }


       
        else if (number != 'clear' || number != 'delete') {
            const content = document.createElement('div')
            content.setAttribute('id', 'theDiv'); 
            content.textContent = number;
            downDisplay.insertBefore(content, downDisplay.firstChild);
    }
    }

    else if (numberhere == 10) {
        const content = document.createElement('div')
        content.setAttribute('class', 'upperDisplay'); 
        content.style.fontSize = '50px'
        content.textContent = "Too many digits :(";
        upperDisplay.insertBefore(content, upperDisplay.firstChild);
        
        while (downDisplay.firstChild) {
            downDisplay.removeChild(downDisplay.firstChild);       
    }

    const contentToo = document.createElement('div')
        contentToo.setAttribute('class', 'upperDisplay'); 
        contentToo.style.fontSize = '50px'
        contentToo.textContent = "Please clear";
        downDisplay.insertBefore(contentToo, downDisplay.firstChild);

         pickedNum1 = "";
         pickedNum2 = "";
         pickedOperator = "";
         arr = [];
         anotherArr = [];
        numberhere = 0;
    }
}


zero.addEventListener('click', () => {
    
    return display('0');
    })

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



 dot.addEventListener('click', () => {
    return display('.');
    })




plus.addEventListener('click', () => {
    pickedOperator = '+';
    return display('+');
    })

    sub.addEventListener('click', () => {
        pickedOperator = '-';
        return display('-');
        })

        multi.addEventListener('click', () => {
            pickedOperator = '*';
            return display('*');
            })


            divis.addEventListener('click', () => {
                pickedOperator = '/';
                return display('/');
                })

 equal.addEventListener('click', () => {
     return display('=');
        });