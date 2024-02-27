// game data
const paths = ['left', 'right', 'forward', 'backward'];
const encounters = ['monster', 'treasure', 'nothing'];

let health = 10;
let treasureCount = 0;

// function if we encounter something
function encounterSomething(pathIndex){
    console.log("You decided to go " + paths[pathIndex]);

    // an encounter
    const encounter = encounters[Math.floor(Math.random() * encounters.length)];

    // switch case statement for encounters
    switch(encounter){
        case 'monster':
            console.log("OH NO! You encountered a monster!");
            health -= 2;
            console.log("You have " + health + " health left");
            break;
        case 'treasure':
            console.log("You found a gold coin!");
            treasureCount += 1;
            console.log("You have " + treasureCount + " gold coins");
            break;
        case 'nothing':
            console.log("Nothing there. Phew!");
            break;
    }

    console.log(`Your health is now ${health} and you have ${treasureCount} gold coins.`);
}

// function to play the game
function startAdventure(){
    let pathIndex = 0;

    while(health > 0){
        console.log("You are in a dark dungeon. Where do you want to go?")
        console.log('0: left, 1: right, 2: forward, 3: backward');

        // in a real game we'd have user interface, but for now we'll just use random numbers
        pathIndex = Math.floor(Math.random() * paths.length);

        encounterSomething(pathIndex);

        // check if the player still have health
        if(health <= 0){
            console.log("You died");
            break;
        }

        // check if the player found treasure
        if(treasureCount >= 3){
            console.log("You won!");
            break;
        }

        // simulate path through the dungeon
        pathIndex = (pathIndex + 1) % paths.length;
    }
}

startAdventure();