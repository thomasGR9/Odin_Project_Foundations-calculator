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

   

    if (numberhere < 11) {
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
            let sumAnother = "";   
            let previousOper;
                if (!(pickedNum1 == '')) {
                    previousOper = document.getElementById('operator').innerHTML;
                    pickedNum1 = +pickedNum1;
                    for (let i = (arr.length-1); i >= 0; i--) {
                        sumAnother += arr[i];
                    }
                     sumAnother = +sumAnother;
                    pickedNum1 = operate(pickedNum1,sumAnother,previousOper);
                }
                else if (pickedNum1 == '') {
                    for (let i = (arr.length-1); i >= 0; i--) {
                        pickedNum1 += arr[i];
                    }
                  sumAnother = pickedNum1;  
                }
            const upperText = document.createElement('div');
            const upperTextOperator = document.createElement('div');
            upperText.textContent = sumAnother;
            upperTextOperator.textContent = pickedOperator;
            upperTextOperator.setAttribute('id', 'operator');
            upperText.style.fontSize = '50px'
            upperTextOperator.style.fontSize = '50px'
            upperDisplay.insertBefore(upperText, upperDisplay.firstChild);   
            upperDisplay.insertBefore(upperTextOperator, upperDisplay.firstChild); 
            arr = []; 
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
        let x4;
   
        
        if (pickedOperator == "+") {
             x3 = add(x1, x2);
             x4 = x3;
            if (x4 > 999999999) {
                x4 = x4.toExponential(3);
            }
            if (!(Number.isInteger(x3))) {
                x4 = x3.toFixed(3);
            }
            const result = document.createElement('div');
            result.textContent = x4;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        else if (pickedOperator == "-") {
             x3 = subtract(x1, x2);
             x4 = x3;
            if (x4 > 999999999) {
                x4 = x4.toExponential(3);
            }
            if (!(Number.isInteger(x3))) {
                x4 = x3.toFixed(3);
            }
            const result = document.createElement('div');
            result.textContent = x4;
            downDisplay.insertBefore(result, downDisplay.firstChild);    
        }
        else if (pickedOperator == "*") {
             x3 = multiply(x1, x2);
             x4 = x3;
            if (x4 > 999999999) {
                x4 = x4.toExponential(3);
            }
            if (!(Number.isInteger(x3))) {
                x4 = x3.toFixed(3);
            }
            const result = document.createElement('div');
            result.textContent = x4;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        else if (pickedOperator == "/") {
             x3 = divide(x1, x2);
             x4 = x3;
            if (x4 > 999999999) {
                x4 = x4.toExponential(3);
            }
            if (!(Number.isInteger(x3))) {
                x4 = x3.toFixed(3);
            }
            const result = document.createElement('div');
            result.textContent = x4;
            downDisplay.insertBefore(result, downDisplay.firstChild);
        }
        else {
            const upperTextAgain2 = document.createElement('div');
            upperTextAgain2.textContent = "Pick an oparator";
            upperTextAgain2.style.fontSize = '50px'
            upperDisplay.insertBefore(upperTextAgain2, upperDisplay.firstChild);
            return;
        }
       
        const upperTextAgain = document.createElement('div');
        if (x4 != "Too big") {
            upperTextAgain.textContent = `${pickedNum2} = `;
            
            upperTextAgain.style.fontSize = '50px'
            upperDisplay.insertBefore(upperTextAgain, upperDisplay.firstChild);
        }

    }


       
        else if (number != 'clear' || number != 'delete') {
            const content = document.createElement('div')
            content.setAttribute('id', 'theDiv'); 
            content.textContent = number;
            downDisplay.insertBefore(content, downDisplay.firstChild);
    }
    }

    else if (numberhere == 11) {
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


        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 97 || event.keyCode == 49) {
                return display('1');
            }
            else if(event.keyCode == 98 || event.keyCode == 50) {
                return display('2');
            }
            else if(event.keyCode == 99 || event.keyCode == 51) {
                return display('3');
            }
            else if(event.keyCode == 100 || event.keyCode == 52) {
                return display('4');
            }
            else if(event.keyCode == 101 || event.keyCode == 53) {
                return display('5');
            }
            else if(event.keyCode == 102 || event.keyCode == 54) {
                return display('6');
            }
            else if(event.keyCode == 103 || event.keyCode == 55) {
                return display('7');
            }
            else if(event.keyCode == 104 || event.keyCode == 56) {
                return display('8');
            }
            else if(event.keyCode == 105 || event.keyCode == 57) {
                return display('9');
            }
            else if(event.keyCode == 8) {
                return display('delete');
            }
            else if(event.keyCode == 8) {
                return display('delete');
            }
            else if(event.keyCode == 187) {
                return display('=');
            }
            else if(event.keyCode == 108 || event.keyCode == 190) {
                return display('.');
            }
            else if(event.keyCode == 96 || event.keyCode == 48) {
                return display('0');
            }
            else if(event.keyCode == 111) {
                pickedOperator = '/';
                return display('/');
            }
            else if(event.keyCode == 106) {
                pickedOperator = '*';
                return display('*');
            }
            else if(event.keyCode == 109) {
                pickedOperator = '-';
                return display('-');
            }
            else if(event.keyCode == 107) {
                pickedOperator = '+';
                return display('+');
            }
        })