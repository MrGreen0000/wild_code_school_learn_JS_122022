let today = new Date();
document.body.innerHTML = "<h1>Today's date is " + today + "</h1>"
document.body.style.backgroundColor = "pink";
document.body.style.color = "white";

let p = document.createElement("p");
let t = document.createTextNode("Paragraph text.");
p.appendChild(t);
document.body.appendChild(p);

console.log(1 !== 1);

let myName = "Naji";
console.log(myName);
document.body.innerHTML = "<h1> My name is " + myName + "</h1>";

let userAge = 44;
let fruits = ['apple', 'banana', 'kiwi'];
let userCar = {
    model: "BMW",
    year: "2000"
};
let sayMyName = function () {
    console.log("My name is Bob !")
};

let myNames = "Bob";
console.log(myNames);
myNames = "Paul";
console.log(myNames);
typeof 1;

let a = 1;
a = 2;
console.log(a);

const name = "Paul";

if (name === "Paul") {
    console.log("Welcome, Paul");
} else {
    console.log("Go away!");
}