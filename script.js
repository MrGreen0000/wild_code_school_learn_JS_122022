// const apple = {
//     color: "#00FF00",
//     diameter: 1,
//     isEaten: false,
//     vitamins: ["A", "B1", "B2", "B6", "C"],
//     variety: { code: 576, name: 'Granny Smith' },
//     gather: function () {
//         return "Here's one apple!";
//     }
// }

// console.log(apple.color);
// console.log(apple['diameter']);
// console.log(apple.vitamins[2]);
// console.log(apple.variety.name);
// console.log(apple.gather());



// while(true) {
//     let userChoice =prompt("What kind of property do you want to display?");
//     console.log(apple[userChoice]);
// }

// const billyTheCat = {
//     name: "Billy",
//     color: "0A0909",
//     favoriteFoods: ["Meet", "Fish", "Rice", "Pasta", "Chicken" ],
//     isHungry: true,
//     meow: function () {
//         return "Meooow";
//     }
// };

// while(true) {
//     let userChoice = prompt("What kind of property do you want to display?");
//     console.log(billyTheCat[userChoice]);
// }

// apple.growsOn = "Tree";
// apple.color = "Red";

// delete apple.color;

// console.log(apple.growsOn);
// console.log(apple.color);
// console.log(apple);

// const fruits = [
//     { name: "apple", color: "green" },
//     { name: "Pineapple", color:"yellow" },
//     { name: "Orange", color:"orange" },
//     { name: "Cherry", color:"red" },
//   ];

//   console.log(fruits[0].color);


//   const animals = [
//     {name: "Billy", species: "Cat", sound: "Meow"},
//     {name: "Bob", species: "Dog", sound: "Woof"},
//     {name: "Jimmy", species: "Squirrel", sound: "Chit"},  
//   ];

//   for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i].sound);
//   }

// const person1 = {
//     name: "Bob",
//     age: 30,
//     sayHello: function (){
// console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
//     }
// };

// person1.sayHello();

// const apple = {
// 	isEaten: false,
// 	eat: function(){
//     // We check the value of isEaten
// 		if(this.isEaten){
//       // If isEaten is true, we display a specific message
//       console.log('The fruit has already been eaten...');
//     }
//     else{
//     // Otherwise we change the state of isEaten to true
//       this.isEaten = true;
//       console.log('You eat the apple...')
//     }
// 	}
// }

// console.log(apple.isEaten);
// apple.eat();
// console.log(apple.isEaten);
// apple.eat();


const  billyTheCat = {
    name: "Billy",
    species: "Cat",
    isHungry: true,
    feed: function () {
      if (this.isHungry) {
        this.isHungry = false;
        console.log(`${this.name} is  eating...`);
      } else {
        console.log(`${this.name} is not hungry`);
      }
    }
  };
  
  billyTheCat.feed();
  billyTheCat.feed();
  billyTheCat.feed();
  billyTheCat.feed();

