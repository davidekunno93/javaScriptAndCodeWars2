//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish", "South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let favfoods = (dict_1) => {
    console.log(`Your favorite types of pizza and ${person3["pizza"]}`)
    console.log(`Your favorite type of taco is ${person3.tacos.toLowerCase()}`)
    console.log(`Your favorite place to get Burgers are ${person3.burgers.toLowerCase()}`)
    console.log(`Your favorite flavors of ice cream are ${person3.ice_cream}`)
    console.log(`Your favorite shakes are: ${person3.shakes[0].oberwise} from Oberwise, ${person3.shakes[0].dunkin} from dunkin, ${person3.shakes[0].culvers} from culvers, ${person3.shakes[0].mcDonalds} from McDonalds, and ${person3.shakes[0].cupids_candies} from cupids candies`)
}
favfoods(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Human {
    constructor(name, age=1){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`My name is ${this.name}, and I am ${this.age} years old.`)
    }

    ageUP() {
        this.age++
        console.log(`Happy Birthday ${this.name}!`)
    }

    addAge = (n) => {
        this.age = this.age + n
    }
}

let santiago = new Human("Santiago")
let jeremy = new Human("Jeremy")

console.log(santiago.age)
santiago.ageUP()
santiago.printInfo()
santiago.ageUP()
santiago.printInfo()
santiago.addAge(5)
santiago.printInfo()



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let check10 = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length >= 10) {
            console.log("Big word!")
        } else {
            console.log("Small number")
        }
})
}

check10("elephant")
check10("elephantitis")

/*  
CODEWARS!!!
Q1 = Complete the function that takes a string of English-language text and returns the number of consonants 
in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {
    let vowels = ['a','e','i','o','u']
    let counter = 0
    // loop thru str
    for (let char of str){
      if (char.toUpperCase() != char.toLowerCase()) {
        // count only characters that are not vowels
        if (!vowels.includes(char.toLowerCase())) {
          counter++
        }
      }
    }
    // return the count
    return counter
}

/*
In this kata you should simply determine, whether a given year is a leap year or not. 
In case you don't know the rules, here they are:
    years divisible by 4 are leap years
    but years divisible by 100 are not leap years
    but years divisible by 400 are leap years
    Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
*/

function isLeapYear(year) {
    // if % 4 && not % 100 > leap year 
    if (year % 4 == 0 && year % 100 != 0){
      return true
    // else if % 400 > leap year
    } else if (year % 400 == 0){
      return true
    // else not leap year
    } else {
      return false
    }
}