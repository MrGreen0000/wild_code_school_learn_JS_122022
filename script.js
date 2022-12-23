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

const names = "Bob";

if (names === "Bob") {
    console.log("Hello, Bob!");
} else {
    console.log("You're not Bob, go away");
}

const userName = prompt("What's your name?");
console.log(userName);

const password = prompt("What's your password");

if (password === "secret") {
    console.log("Welcome !");
} else {
    console.log("Wrong password !");
}

const age = prompt("How old are you?");
console.log(typeof(age))

const ageNumber = parseInt(age);
console.log(typeof(ageNumber));

const user = prompt("How old are you ?");

if (user < 3) {
    console.log("Hello, Baby !");
} else if (user < 18) {
    console.log("Hi !");
} else if (user < 100) {
    console.log("Greetings");
} else {
    console.log("Wow...");
}