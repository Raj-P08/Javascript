// HOF(Higher order function) and callback function
// the function which takes another function as an argument.
    // it accepts one or more function as argument
function HOF(demo, n){
    let a = 10;
    let b = 30;
    console.log(a,b);
    demo();
    n(4);
    // var m = n(10);
    // console.log(m);
}

HOF((y) => console.log("call back function"),(x)=>console.log("hii"));

let sum = (a,b)=> a+b;
let sub = (a,b)=> a-b;


let ar = (sum , sub) =>{
    console.log(sum(10,20));
    console.log(sub(400,300));
}

ar(sum, sub);

// Nested function

var z = 100;
function outer(){
    console.log("start");
    let v = 100;
    let c = 200;

    console.log(v,c);
    let arr = () => {
        console.log("nested function");
    };
    console.log("end");
    // arr();
    return arr;
}

// let res = outer();
// res();

outer()();

// closer- scope/memory allocation
//  closer is a scope or memory allocation which gets created when we accessed the outer function variable 
//  inside inner function then the closure will get created for outer function.

function f1(){
    let y = 200;
    function f2(){
        let x = 90;
        console.log(y);
        console.log(x);
    }
    f2();
}
f1();


// IIFE - immediate invoke function expression
//  To avoid global pollution

let a = 210;
console.log(a);

(function(){
    console.log("IIFE");
    console.log(a);
    console.log("end");
})();

(function (){
    let a = 400;
    console.log(a);
})();

console.log(10+10);
console.log(10+"10");
console.log(10-"5");
console.log(10 * "str");
console.log("5" * "10");
console.log("10" / 2);
console.log(51 % 10);

console.log(104 % 5);
