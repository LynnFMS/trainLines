//setting up async/await ask functionality for the command line
const readline = require("readline");
const readlineInterface = readline.createInterface(
    process.stdin,
    process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}


//YOUR CODE GOES HERE!

class Line { //creates a class
    constructor (color, ) {
        this.color = color //stores properties
        this.connections = []; //array, calss stores the connections it has
    } 
    addConnections(lines) {
        this.connections.push(...lines); //spread operator - takes an array and de-arrayifies it
    }
}

class Person {
    constructor(startingLine) {
        this.currentLine = startingLine
        this.name = null;
    }

    transferLines(line) {
        this.currentLine = line
    }
}

let blue = new Line("blue"); //class instance - user defined object (constructor function...)
let green = new Line("green");
let yellow = new Line("yellow");
let red = new Line("red");
let purple = new Line("purple");

blue.addConnections([green, red])//calling method! addConnections!
green.addConnections([blue, yellow]);
yellow.addConnections([green, red, purple])
red.addConnections([blue, yellow])
purple.addConnections([yellow])
// console.log(purple.connections)
// console.log(green.connections)

let user = new Person(blue);

async function main() {
    //YOUR RIDE GOES HERE
    //introduce user to our program
    console.log("Hello! Welcome to our subway!")
    user.name = await ask("What is your name? ");
    //TODO: What happens if user's name is the "empty" string?
    //tell the user where they want to start
    console.log(`Hello ${user.name}! You are currently on the ${user.currentLine.color} line.`)

    //let the user travel from line to line
    //as the user for a destination to travel to
    // let destination = undefined
    let destLine = undefined;
    do {
    const destination = await ask("Where would you like to go? ");
    //find the line object that the user provided in our current line's connections array
    destLine = user.currentLine.connections.find((line) => line.color === destination) //how we find out how, how the destination is/goes
    //TODO: what happens if the "destination is 'Red'"
    //TODO: What happens if destination is 'Orange'?
    //TODO: how does our user know where they can travel to?
   
    if (destLine === undefined) {
        console.log(`You can't go from ${user.currentLine.color} to ${destination}.`)

    } 
} while (destLine === undefined)
    user.transferLines(destLine);
    console.log(`You are now on the ${user.currentLine.color}.`)
    //TODO: Let the user move lines more than once - 
    // console.log(destLine);
    //test if the user can travel to their destination
   
    //ends program
    process.exit();
}

main();


