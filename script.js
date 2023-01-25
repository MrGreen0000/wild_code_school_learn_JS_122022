function helloWorld (){
    console.log("Hello, ");
    console.log("World !");
}

helloWorld();

function sayHello(name, age){
    console.log("Hello " + name + "!" + " "+ age + " ans") ;
}

sayHello("Naji", 44);

const name = "Alexandra";

console.log(`Hello ${name}`);
console.log(`C'est vrai: ${1 < 2}`);

function sum(a,b){
    return a + b;
}

console.log(sum(1,2))

function login(name, password){
    if(name === "Bob" && password === "secret"){
        return true;
    }
    else{
        return false;
    }
}

let userName = prompt("What's your name?");
let userPassword = prompt("What's your password?");

if(login(userName, userPassword)){
    console.log("Welcome!");
}else{
    console.log("Wrong credentials...");
}