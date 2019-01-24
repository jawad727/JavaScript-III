/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: In the global scope, the value of this will point to the window object
* 2. Implicit Binding: Whatever is to the left of the dot becomes the context for this in the function
* 3. New binding: Refers to the specific object that is created by a constructor function
* 4. Explicit Binding: Allows the developer to choose what to bind this to by using (call(), bind(), apply())
*


* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding
console.log(this);



// Principle 2

// code example for Implicit Binding
const jawadObj = {
    name: `jawad`,
    age: 18,
    greets: function(){
        `Hello, name is ${this.name}`;
    }
};



// Principle 3

// code example for New Binding

function Alien(name) {
    this.name = name;
    this.greeting = 'Greetings earthling, we come in peace';
    this.speak = function() {
      console.log(this.greeting);
    };
  }
  
  const ET = new Alien('ET');
  


// Principle 4

// code example for Explicit Binding

const Person = {
    name: "john"
}

function introduce(){
    console.log(`Hello, my name is ${this.name}, its nice to meet you`)
}

introduce.call(Person);