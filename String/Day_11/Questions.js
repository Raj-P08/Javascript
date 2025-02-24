// ! Convert the string into array

let str1 = "Javascript";
// let r = str.split("");
// r.reverse();
// let r1 = r.join("");
// console.log(r1);

// 2nd way
// let r2 = str.split("").reverse().join("");
// console.log(r2);

// ! convert the string into array without reverse() method

let res3 = str1.split("").reduceRight((acc,cv)=>acc + cv,"");
console.log(res3);
