
let arr1 = [1, 2, 3, 4,];
arr1.sayhello = () => {
    console.log("say hello");
};

let arr2 = [];
arr2.sayhello = () => {
    console.log("say hello");
};

console.log(arr1.sayhello === arr2.sayhello);
console.log("Array Prototype: ", arr1.__proto__)

console.log(arr1.push(5));
// arr1.__proto__.push = (n) => {
//     console.log("Pushing number : ", n);
// }

console.log(arr1.push(6));
console.dir(arr1);

// -----------------factory Method -------------------
function personMaker(name, age) {
    let person = {
        name: name,
        age: age,
        talk() {
            console.log("Hii I am a ", this.name);
        }
    }
    return person;
}

let p1 = personMaker("Belish", 23);
let p2 = personMaker("Sansa", 22);
console.log(p1);
console.log(p2.talk());

//  ---------Constructors-------

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function () {
    console.log("Hii am i ", this.name);
}
let p3 = new Person("Aarya", 20);
console.log(p3);

//-------------Classes------------------
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("Hi i am a ", this.name);
    }
}

let p4 = new Employee("Jofry", 33);
let p5 = new Employee("Jofry", 33);
console.log(p4.name);
p4.talk();
console.log(p4.talk === p5.talk);

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log("I ama a", this.name);
    }
}

class Student extends person {
    constructor(name, age, marks) {
        super(name, age);
        console.log(`Name: ${this.name}, Age: ${age}, Marks: ${marks} `);
    }
    
}

let st1 = new Student("Harry",20,87);
st1.talk();

class Teacher extends person{
    constructor(name, age,sub ){
        super(name,age);
        console.log(`Name: ${this.name}, Age: ${age}, Subject: ${sub} `);
    }

}

let t1 = new Teacher("Jonny",45,"JavaScript");
t1.talk();