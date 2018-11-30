function showFirstMessage(text) {
    alert(text);
    let num = 20;
}

showFirstMessage("Hello my first function!");

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));

function retVar() {
    let a1 = 50;
    return a1;
}

let another2 = retVar();
console.log(another2);

let plus = function (a, b) {
    return a+b;
}

console.log(plus(5, 6));


let calc1 = (a, b) => a+b;
console.log(calc1(7, 8));

let str = "Test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

a5 = 