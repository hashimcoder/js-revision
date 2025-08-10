
//OOP (Object-Oriented Programming) is a way of structuring code using 
// objects — bundles of data (properties) and functions (methods) that work together.



const info = {
    name:"hashim",
    age:"15",
    city:"Ramput",
    greet:function(){
        console.log(`Hello ${this.name}`)
    }
    
}
info.greet()

// A class is the blueprint to create objects
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  drive() {
    console.log(`${this.name} is driving at ${this.speed} km/h`);
  }
}

const car1 = new Car("BMW", 120);
car1.drive(); // BMW is driving at 120 km/h
const car2 = new Car("Mercedes",95);
car2.drive();

const car3 = new Car("Audi",110);
car3.drive();

//Encapsulation is hiding data and allowing controlled access. 
class BankAccount {
  #balance = 0; // private field
  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }
  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
// acc.#balance  ❌ Error (private)

//Abstraction is showing only essential details and hiding the complexity.
class CoffeeMachine {
  start() {
    console.log("Starting machine...");
  }
  brewCoffee() {
    console.log("Brewing coffee...");
  }
  makeCoffee() {
    this.start();
    this.brewCoffee();
    console.log("Coffee ready!");
  }
}

const machine = new CoffeeMachine();
machine.makeCoffee(); // Hides inner complexity

// Inheritance allows a class to use properties and methods of another class.
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak(); // Dog barks

// Polymorphism means one interface, many forms (method overriding).
class Bird {
  makeSound() {
    console.log("Some bird sound");
  }
}

class Parrot extends Bird {
  makeSound() {
    console.log("Parrot says hello!");
  }
}

class Crow extends Bird {
  makeSound() {
    console.log("Crow says caw!");
  }
}

class Horse extends Bird {
  makeSound(){
      console.log("Horse says neigh!")
  }
}
const birds = [new Parrot(), new Crow(), new Bird(), new Horse()];
birds.forEach(b => b.makeSound());
// Parrot says hello!
// Crow says caw!
// Some bird sound
// Horse says neigh!
// Crow says caw!


// Protype and prototype chaining 
// A prototype is a collection of methods and properties that are shared between objects.
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Hashim");
p1.sayHello(); // Hi, I'm Hashim
const p2 = new Person("khan");
p2.sayHello()

// this keyword  refers to the object that is calling the method.

class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const u = new User("Hashim");
u.greet(); // Hello, Hashim
const u1  = new User("khan")   /// Arrow functions don’t bind their own this — they take it from the outer scope.
u1.greet()
