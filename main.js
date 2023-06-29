console.log("We have nodejs now!")

console.log(" I have to hit Run and Debug everytime I run the code")


// simple object

let animal = {
    name: "Golden Eagle",
    age: 45,
    color: "black"
}

//bracket notation
console.log(animal["name"])

console.log(animal.name)

animal["legs"] = 2;
console.log(animal.legs)

delete animal.legs;
console.log(animal.legs)

// complex object
let animals = {
    eagles: {
        'Bald': {
            prey: ['fish', 'mice'],
            flight: true,
        },
        'Golden': {
            prey: ['squirrels', 'mice', 'chipmunks'],
            flight: true
        },
    },
    cats: ['house cat', 'tiger', 'lion', 'leopard'],
    dogs: 'Fido'
}

// looping through objects

// for in: iterates through keys in an object or in indices in an array
// for each: is each item

for (property in animal){
    console.log(property)
};

let lst = ['a','b','c','d','e','f','g']
for (i in lst){
    console.log(i)
}

//dict.keys(), dict.values(), dict.items()?
//Object.keys(<object>)
//Object.values(<object>)
//returns an array of keys or values
console.log(Object.keys(animals));
console.log(Object.values(animals));

let vals = Object.values(animals);
for (let i = 0; i < vals.length; i++){
    console.log(vals[i])
};

console.log("Time for CLASSES")

//Custom onject prototypes
// 3 ways

function Dog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printInfo = function(){
        console.log(`This is a ${color}, ${breed} dog, his/her name is ${name}`)
    }
}

let my_dog = new Dog("Isis", "Lab", "Black", true);
my_dog.printInfo();

//class based object
class DogC {
    constructor(name, breed, color, tail=true){
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.tail = tail;
    }
    printInfo(){
        console.log(`This is a ${this.color}, ${this.breed}, named ${this.name}`)
    }
}

let next_dog = new DogC("Fido", "Pitbull", "Brindle", tail=false);
next_dog.printInfo();

class Lab extends Dog{
    constructor(name, breed, color, tail=true){
        super(name, breed, color, tail=true);
        this.loyal = "VERY"
        this.lazy = true;
    }
    bark(){
        console.log("WOOF!");
        this.loya += 'very loyal...';
        console.log(this.loyal)
    };
}

let a_lab = new Lab("Lassie", "Lab", "Golden", true);
a_lab.printInfo();
a_lab.bark();

// funtionc-based object with arrow fincs for methods

function ArrDog(name, breed, color, tail=true){
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.tail = tail;

    this.printInfo = () => {
        console.log(`This is a ${this.color}, ${this.breed} dog called ${this.name}`)
    }
}

let another_dog = new ArrDog('Frankenweenie', 'mutt', 'white/black', false)
another_dog.printInfo()


// the frozen pizza example: pullOutPizza() --> cookPizza() --> preheatOven()

// In JS functions are objects and can return other functions

let first = () => {
    setTimeout(()=>(console.log(1234)), 4000);
}
let second = () => {
    console.log(2);
}

// first();
// second();
// first();

// let attendClass = (subject, callback) => {
//     alert(`Attending ${subject} class!`);
//     callback();
// }

// let endClass = () => {
//     console.log("Class is over!");
// }

// endClass(attendClass("Math", endClass));

//Callback hell - when...

//JS solution is Promises

let isEven = (num) => {
    return new Promise((resolve, reject) =>{
        if (num % 2 == 0){
            resolve(num);
        } else {
            reject(num);
        }
    })
}

// call the function and use promise with .then() and .catch()
// .then() method represents the resolve path
// .catch() method represents the reject path

isEven(2)
.then( (result) => {
    console.log(`It's an Even number: ${result}`);
}).catch( (result) => {
    console.log(`It's an Odd number ${result}`)
});

isEven(253)
.then( (result) => {
    console.log(`It's an Even number: ${result}`);
}).catch( (result) => {
    console.log(`It's an Odd number ${result}`)
});


// async await syntax

let increaseSlow = (base, increase) => {
    return new Promise( (resolve) => {setTimeout( () => resolve(base+increase), 2000)})
}

let giveRaise = async (salary, raise) => {
    let new_salary = await increaseSlow(salary, raise);
    console.log(`Your new salary is ${new_salary}`)
}

giveRaise(90000, 30000)

// Closure
/* a self invoking function that can then be set to a variable
and return a function expression. */

let countUp = ( function () {
    let counter = 0; // private variable only accessible within the function
    return function () {console.log(counter++)}
})()

// countUp();
// countUp();
// countUp();
// countUp();
// countUp();
// countUp();

let addNames = ( () => {
    let names = [];
    console.log("adding names");
    return (name) => {
        names.push(name);
        console.log(names);
    }
})()

// addNames("David");
// addNames("Orlando");
// addNames("Kaytlin");
// addNames("Conner");
// addNames("Yousif");

