
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


let r1 = str.slice(0,4);
console.log(str);
console.log(r1);

let r2 = str.substring(5);
console.log(str);
console.log(r2);


// * sbstr();

let r3 = str.substr(5,2);
console.log(r3);

// * replace();

let st = "This is Javascript class and we can learn Javascript";
let r4 = st.replace("Javascript", "React");
console.log(r4);


// * replaceAll();
let r5 = st.replaceAll("Javascript","React");
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
let x = "         Hello world!!!!        ";
let r8 = x.trim();
console.log(r8);
console.log(x.trimStart());
console.log(x.trimEnd());


// * split();
// Split a string into substrings using the specified separator and return them as an array.
// it will convert the string into array elements
// it will take 1 argument i.e. separator
let r9 = str.split("a");
console.log(r9);

let y = "hello world";
let r10 = y.split(" ");
console.log(r10);


// * charAt();
let m = "javascript";
let r11 = m.charAt(3);
console.log(r11);

// * charCodeAt();
let r12 = m.charCodeAt(3);
console.log(r12);

console.log(m.includes("i"));
console.log(m.includes("a" , 4));