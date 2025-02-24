let arr = [10,40,20,60,90];

//* for of loop
// ? it iterates the elements/values of an array
for (let v of arr) {
    console.log(v);
}


// * for in loop
// ? it iterates an index of an array
for(let i in arr){
    console.log(i,arr[i]);
}

// * keys(), values(), entries()

// keys
let k = arr.keys();
console.log(k);
for(let key of k){
    console.log(key);
}

// values
let v = arr.values();
console.log(v);
for(let value of v){
    console.log(value);
}

// entries
let e = arr.entries();
console.log(e);
for(let entry of e){
    console.log(entry);
}



