let arr = [1, 2, 4, 5];

// * when we are assigning the one array to the new array then it will take same heap address
// * thats why when we are updating the new array then it will update the old array also
// * to overcome from this drawback we use spread operator
// let arr2 = arr;
// arr2.push(10);
// console.log(arr);
// console.log(arr2);

// let arr2 = [...arr];
// arr2.push(10);
// console.log(arr);
// console.log(arr2);

// ! Using Object

let obj = {
  name: "Raj",
  add: {
    country: "India",
    state: {
      code: "MH",
      pin: "421506",
    },
  },
};

// let obj2 = obj;
// obj2.name = "abcd";

// let obj2 = { ...obj };    //~ Shallow copy
// obj2.name = "abcd";

// let obj2 = { ...obj, add: { ...obj.add, state: { ...obj.add.state } } };   //~ Deep copy
// obj2.add.country = "abcd";
// obj2.add.state.code = "DL";
// console.log(obj);
// console.log(obj2);

//! shortcut

let obj2 = JSON.parse(JSON.stringify(obj));
obj2.add.state.code = "DL";
console.log(obj);
console.log(obj2);
