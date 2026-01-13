let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

arr.sayHello = function () {
    console.log("Hello from arr!");
}
arr2.sayHello = function () {
    console.log("Hello from arr2!");
}

// Factory Function

function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log("Hello, my name is " + person.name);
        }
    };
    return person;
}

let p1 = PersonMaker("Alice", 30);
let p2 = PersonMaker("Bob", 25);

// Constructor Function
function AnimalMaker(name, color) {
    this.name = name;
    this.color = color;
    console.log(this);
}

AnimalMaker.prototype.speak = function () {
    console.log("I am a " + this.name);
}

let a1 = new AnimalMaker("Dog", "Brown");
let a2 = new AnimalMaker("Cat", "Black");

//Class Syntax
class PersonMake{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hello, my name is " + this.name);
    }
}

let ps1 = new PersonMake("Alice", 30);
let ps2 = new PersonMake("Bob", 25);

//inheritance with Classes
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hello, my name is " + this.name);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        super (name, age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super (name, age);
        this.subject = subject;
    }
}

let stud1 = new Student("Charlie", 20, 90);
let teach1 = new Teacher("David", 40, "Math");
