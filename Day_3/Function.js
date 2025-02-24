// function;

function demo(){
    console.log("Hello");
    console.log("Hello World");
    console.log("hello");
    console.log("bye");
}

// demo();
// demo();
// demo();

function f1(a,b){
    console.log("start");
    console.log(a);
    console.log(b);
    console.log("end");
}

f1(10, true);
// f1(1000n, "str");
// f1(900);


let a;
console.log(a);

function f2(x = 100,y = 200){
    console.log("start");
    console.log(x);
    console.log(y);
    console.log("end");
}

f2("str1" , "st2");


function f3(a,b){
    // console.log(a);
    // console.log(b);
    return a + b;
}
let x = f3(10,20);
console.log(x);

function f4(){
    return 10, 20 , 30, 40;
    let x = 10;
    console.log(x);
}

let v = f4();
console.log(v);

function f5(){
    let x = 10;
    let y = 20;
    console.log(x,y);
}
let v2 = f5();
console.log(v2);


// function f6(){
//     function f7(a,b){
//         a=10;
//         b=20;
//         return a+b;
//     }
//     console.log(f7());
// }

// // let z  = f6();
// // console.log(z); 
// f6();