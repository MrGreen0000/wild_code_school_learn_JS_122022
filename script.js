const fruits =["Kiwi", "Apple", "Pineapple"];

console.log(fruits[0]);

console.log(fruits[1]);

console.log(fruits[2]);

fruits[0] = "Banana";
console.log(fruits[0]);

const animals = ["Tiger", "Elephant", "Monkey"];

console.log(animals);

console.log(fruits.length);

fruits.push("Banana");
console.log(fruits);

animals.push("Giraffe");
console.log(animals);

fruits.unshift("Strawberry");
console.log(fruits);

animals.unshift("Rhinoceros");
console.log(animals);

fruits.pop();
console.log(fruits);

animals.pop();
console.log(animals);

fruits.shift();
console.log(fruits);

animals.shift();
console.log(animals);