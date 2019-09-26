var input__1 = document.getElementsByClassName('input__1');
var input__2 = document.getElementsByClassName('input__2');
var result = "";
var symbol = "";

function action(p) {
    switch (p.innerHTML) {
        case '+':
            symbol = '+'
            break
        case '-':
            symbol = '-';
            break
        case '*':
            symbol = '*';
            break
        case '%':
            symbol = '%';
            break
        default: 
            break    
    }
}

function sumResult() {
    const NumOne = Number(document.getElementById("input__1").value)
    const NumTwo = Number(document.getElementById("input__2").value)

    switch (symbol) {
        case '+':
            result = NumOne + NumTwo;
            break
        case '-':
            result = NumOne - NumTwo;
            break
        case '*':
            result = NumOne * NumTwo;
            break
        case '%':
            result = NumOne % NumTwo;
            break
        default: 
            break    
    }
    document.getElementById('input__3').innerHTML = result;
}

console.log(this);