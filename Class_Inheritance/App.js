// ! Class Inheritance

class Person {
  constructor(gender) {
    this.gender = gender;
  }

  demo() {
    console.log("Demo function");
  }

  static f1() {
    console.log("f1 function");
  }
}

const p1 = new Person("male");
console.log(p1);
p1.demo();
Person.f1();

class Employee extends Person {
  constructor(name, id, sal, gender) {
    super(gender); //& --> calls the parent class constructor
    this.eName = name;
    this.eId = id;
    this.eSal = sal;
  }
}

const e1 = new Employee("abc", 123, 2000, "male");
e1.demo();

let a = [10, 20, 30, 40, 50];
console.log(a);

// ! Object Inheritance

let parent = {
  name: "xyz",
  id: 900,
  getName() {
    console.log(this.name);
  },

  setName(n) {
    this.name = n;
  },
};

let obj1 = {
  name: "abc",
};

obj1.__proto__ = parent;
console.log(obj1);
obj1.getName();
obj1.setName();
console.log(obj1.name);

let d = new Date();
console.log(first);
