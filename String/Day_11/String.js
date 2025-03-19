// ! String methods

let str = "Javascript";
console.log(str.length);
console.log(str[0]);

// * Iterating the String characters

// for(let i = 0; i<str.length; i++){
//     console.log(str[i]);
// }

// for(let v of str) console.log(v);    //returns characters of string
// for(let i of str) console.log(i);   // returns index of characters of string

// * slice
// it is used to extract the part of the string.
let r1 = str.slice(0, 4);
console.log(str);
console.log(r1); // Java

// let str = "Javascript";
let r2 = str.substring(5);
// it is similar to slice method but it will except negative value
console.log(str);
console.log(r2);

// * sbstr();
// this method is also used to extract the part of the string but the difference is it takes 1 argument as a start index and 2 is length of the subString.

let r3 = str.substr(5, 2);
console.log(r3);

// * replace();
// it is used to replace the first matching substring with the new substring.
// it will take 2 arguments i.e. search string 2. replace value
let st = "This is Javascript class and we can learn Javascript";
let r4 = st.replace("Javascript", "React");
console.log(r4);

// * replaceAll();
// it will replace all the substring with new substring.
let r5 = st.replaceAll("Javascript", "React");
console.log(r5);

// * toLowerCase();
let s = "PYTHON";
let r6 = s.toLowerCase();
console.log(r6);

// * toUpperCase();
let v = "java";
let r7 = v.toUpperCase();
console.log(r7);

// * trim();
// It is used to remove the white spaces fromm the both the starting and end of the string
let x = "         Hello world!!!!        ";
let r8 = x.trim();
console.log(r8);
console.log(x.trimStart());
console.log(x.trimEnd());

// * split();
// Split a string into substrings using the specified separator and return them as an array.
// it will convert the string into array elements
// it will take 1 argument i.e. separator
// let str = "Javascript";
let r9 = str.split("a");
console.log(r9);

let y = "hello world";
let r10 = y.split(" ");
console.log(r10);

// * charAt();
// it returns the character based on the index position that we have passing as an argument.
let m = "javascript";
let r11 = m.charAt(3);
console.log(r11);

// * charCodeAt();
// it returns ASCII value of the character based on the index position that we are passing as an argument.
let r12 = m.charCodeAt(3);
console.log(r12);

console.log(m.includes("i"));
console.log(m.includes("a", 4));
