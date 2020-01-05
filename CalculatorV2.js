var exp = "", number, decimal, equal, operator, allowSR = true;
var textview = document.forms['myForm']['textview'];

function insertNum(num) {
if(equal) {
    exp = num;
    textview.value = exp;
    number = true;
    equal = false;
}
else {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
}
if (operator) decimal = false;
SR('a')

}

function insertOp(op) {
textview.value = exp + op;
operator = true;
equal = false;
allowSR = false;
SR('a');
}

function insertDec() {
if (number && !decimal) {
    textview.value = exp + '.';
    decimal = true;
    operator = false;
}
}

function insertPerc() {
    if (number) {
        textview.value = exp/100;
        exp = textview.value;
        operator = true;
        allowSR = false;
        equal = false;
       
        
    } 
    }


    let bracketSwitch = false;
function insertBrac(){
    var input = textview.value;

    if(input.length >= 1){ //already something in the input box
        var index = input.charAt(input.length-1);

        if(!isNaN(parseInt(index)) && bracketSwitch){ //index is a number
            textview.value += ')';
            bracketSwitch = !bracketSwitch;
        } else if((!isNaN(parseInt(index)) && !bracketSwitch) || index === "."){
            textview.value += '*(';
            bracketSwitch = !bracketSwitch;
        }else {
            textview.value += '(';
            if(!bracketSwitch){ //if the switch was off
                bracketSwitch = !bracketSwitch;
            };
        }
    } else { //empty input box
        textview.value += '(';
        bracketSwitch = !bracketSwitch;
    }
};
  

/*function insertBrac() {
    if (number) {
        textview.value = exp + '*(';
        equal = false;
        decimal = true;
        operator = true; 
        var x = textview.value.split('');
        x = exp;
    } if (exp.includes('(')) {
        textview.value = exp + ')'; 
        decimal = true;
        operator = true;
        equal = false;
    } else {
        textview.value = exp + '(';
    }
    
    }*/

/*function insertZero() {
    if (number && !decimal) {
       textview.value = exp + '00';
       exp = textview.value;
       number = true;
       equal = false;
       operator = false;
    } else {
        exp = textview.value + num;
        textview.value = exp;
        number = true;
    } if (operator) decimal = false;
    SR('a')  
    }*/

function EqualTo() {
    exp = textview.value;
    textview.value = eval(textview.value);
 /*if (exp) {
    exp = eval(exp);
    textview.value = exp;*/
   equal = true;
    decimal = false;
    number = false;
    allowSR = true;
    SR('a');
}

    function clean() {
        exp = '';
        textview.value=exp;
        decimal=false;
       
    }

function back() {
    exp = textview.value;
    exp = exp.substring(0, exp.length - 1);
    textview.value = exp;
}

function SR(x) {
if (x=='r') {
    exp = Math.sqrt(exp);
    textview.value = exp;
    equal = true;
    decimal = false;
    number = false;
    allowSR = true;
    SR('a');
} else if (x=='s') {
    exp = exp*exp;
    textview.value = exp;
    equal = true;
    decimal = false;
    number = false;
    allowSR = true;
    SR('a');
} else if (x=='t') {
    exp = exp*exp*exp;
    textview.value = exp;
    equal = true;
    decimal = false;
    number = false;
    allowSR = true;
    SR('a');
}else if (x=='a' && allowSR) {
    document.getElementById('r').disabled = false;
    document.getElementById('s').disabled = false;
    document.getElementById('t').disabled = false;
} else if (!allowSR) {
    document.getElementById('r').disabled = true;
    document.getElementById('s').disabled = true;
    document.getElementById('t').disabled = true;
}

}