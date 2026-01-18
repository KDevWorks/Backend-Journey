

let n = 5;
for (let i = 0; i < n; i++) {
    console.log("Hello ", i);
}
console.log("Loop finished");

console.log(process.argv);
let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("Welcome ", args[i]);
}

//part-2 one directory to anotherr director
//--------------------------

const info = require("./Fruits");
console.log(info);
console.log(info[0]);
console.log("Name",info[0].name)


let cal = require("./math.js");
console.log(cal.sum(3,3));
console.log(cal.mul(3,3));
