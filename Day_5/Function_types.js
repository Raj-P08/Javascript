// Types of Function

function f1(){
    console.log("Named function");
}

f1();

let f2 = function(a,b){
    let x = 10;
    let y = 20;
    console.log(x,y);
    return 10;
}

let res = f2(10,20);
console.log(res);

// Arrow function

let ar = (a,b) => {
    console.log("arrow function");
}

ar();

let arr1 = () => console.log("arr 2");
arr1();

let arr2 = a => a;
console.log(arr2(100));