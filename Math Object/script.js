//^ Math.round()  --> Round figure the value , if value is greater than .5 then it gives next value,
//^ and if the value is less than .5 then it returns same value
console.log(Math.round(10.5)); // 11
console.log(Math.round(10.3)); // 10
console.log(Math.round(10.7)); // 11

//^ Math.ceil()   -->  suppose ceil means ceiling of the room ,
//^ as like that after the .(decimal/point) any value is there then it returns next value or add 1 .
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.5)); // 11

//^ Math.floor() --> it is opposite to the Math.ceil() method, it decrease the value.
//^ It acts like floor of the room
console.log(Math.floor(10.2)); // 10
console.log(Math.floor(10.8)); // 10

//^ Math.trunc()    --> It removes the after .(decimal) part
console.log(Math.trunc(10.98)); // 10

// ^ Math.pow() --> It adds the power and returns the result. 2^5.
//^ it takes 2 parameter
console.log(Math.pow(2, 5)); // 32

//^ Math.sqrt() --> It is used to find the square root of the value
console.log(Math.sqrt(25)); // 5

//^ Math.cbrt() --> It is used to find the cube root of the value
console.log(Math.cbrt(8)); // 2

//^ Math.abs()  --> It will return the absolute value ,
//^ i.e. it will convert the negative(-) value in positive, but not the positive into negative
console.log(Math.abs(-10)); // 10

//^ Math.max()  --> It will return the maximum value, it takes 2 or more argument i.e. values
console.log(Math.max(50, 30, 80)); // 80

//^ Math.min()  --> It will return the minimum value ,it also takes 2 or more argument i.e.values
console.log(Math.min(30, 10, 40)); // 10

//^ Math.random()   --> It will return the random values between 0 to 1
console.log(Math.trunc(Math.random() * 9000 + 1000)); // 0 to 999
// Here we are multiplying with 9000 to generate the random values in between 0 to 999 but we don't want 0 and 9000 that's why we are adding 1000

//^ Math.toFixed()  --> It will return the value after the .decimal.,
//^ suppose we are mentioning 2 then it will return only two value after the decimal.
//^ It returns the value in the form of string
const a = 10.780878;
console.log(a.toFixed(2)); // 10.78

// ! Math Questions
// * 1) Calculate the area and perimeter of the rectangle

const length = 10;
const breadth = 5;

let area = length * breadth;
console.log(area); // 50

let perimeter = 2 * (length + breadth);
console.log(perimeter); // 30

//* 2) Calculate the area of triangle by Heron's formula

let x = 5;
let y = 4;
let z = 3;
let s = (x + y + z) / 2;
console.log(s); // 6

console.log(Math.sqrt(s * (s - x) * (s - y) * (s - z))); // 6

//* 3) calculate circumferrence of the circle
let r = 2;

console.log(Number((2 * Math.PI * r).toFixed(2)));
