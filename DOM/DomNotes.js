//! DOM - Document Object Model

// It is a programming Interface given by the browser to modifying and access HTML element in Javascript.
// The root element is Document it is located in Window object
// Here is everything is node only
// e.g. element node
//      attribute node
//      comment node
//      text node

// * ------------ Accessing HTML elements in Javascript -----------------
// There are 5 ways
// 1. document.getElementsByTagNames();
//      return type - HTML collection

// 2. document.getElementsByClassNames();
//      return type - HTML collection

// 3. document.querySelectorAll();
//      return type - node list

// Till now above 3 ways are for multiple elements

// 4. document.getElementById();
//      return type - particular element node

// 5. document.querySelector();
//      return type - element node

// * Modifying HTMl elements

// 1. Text modification
// a) variable.innerHtml = " " ;
// b) variable.innerText = " " ;

// innerHtml will accept elements
// innerText will not accept elements

// 2. Attribute modification =>
//  variable.attribute_name
// e.g. - variable.alt = " "
//      variable.src = " "

// ! ------------------------ How Asynchronous code works ----------------

// Javascript is single threaded language, that means all the execution will happen in one callStack
// whenever callStack facing any asynchronous code that will push to web API and remaining code will be executed,
// * web API -
//      till Event completion callback function will wait in Web API
//      Once the event complete callback function will push to Callback Queue
//  In Callback Queue we have 2 spaces
//      1. Micro Task Queue
//      2. Macro Task Queue
// promises callback function will go to Micro Task Queue
// setTimeout, setInterval callback function, DOM callback function will go to Macro Tak Queue.

// ! ------------------------ Event loop in Javascript ----------------
// Event loop will check CallStack is empty or not
// Once the callStack is empty it will take callback function from Callback queue and assign to CallStack
