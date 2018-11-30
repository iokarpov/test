

var a1  = 12;
let a2 = 13;
const a3 = 14;
var person = {
    name: "John", 
    age:25,
    isMarried: false
};

console.log(person.name);
console.log(person["age"]);

let arr1 = ['plum.png', '2.jpg', 'a.bmp'];
console.log(arr1[2]);

//alert("Hello World!");

//let ans = confirm("Are you here?");

//console.log(ans);

let ans = prompt("what is u name?", "");
console.log(typeof(arr1));
console.log(ans);

let a4 = 4 + "123";
console.log(typeof(a4) + a4);

console.log(4 + "123");

let incr = 10,
    decr = 10;
++incr;
decr--;
console.log(incr++, --decr);
console.log(incr);
console.log("2" == 2);