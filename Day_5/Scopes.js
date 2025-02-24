// "use strict";
// Scopes

// Global Scope :- var only        

// Script scope :- let and const

// Local scope:- let, const ,var
//              but var belongs to Global scope

// block scope :- let,const

// local scope is created only when the function called
let x = 10;
var y = 20;         // Global scope
const z = 40;

console.log(x);
console.log(y);
console.log(z);

function demo(x,y){
    let a = 10;
    var b = 20;     //local scope
    const c = 30;
    console.log(a,b,c);
    return c - b;
}
demo(100,200);

{
    let p = "str";
    const q = "js";
    var r = "java";
    console.log(p);    // block Scope
}

console.log(r);
// console.log(q);   // block scope

// Example for use strict;

m = "python";
console.log(m);

// Uncaught SyntaxError: Duplicate
// parameter name not allowed in this

function f1(a,b,b){
    console.log(a+b+b);
}

f1(10,15,20);