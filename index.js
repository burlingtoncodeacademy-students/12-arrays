let arrayExample = [
    1,
    "string",
    true,
    function someName() {
        console.log("Hello World");
    }, 
    [
        "array",
        "of",
        "strings",
        [
            "nested",
            "array",
            "some name"
        ]
    ]
]

// console.log(arrayExample[4][3][2]);

let emptyArray = [];

// console.log(emptyArray);

let fruits = ["apple", "banana", "cherry"];

fruits[4] = "apricot";

// console.log(fruits);

// console.log(fruits[3])

let carParts = ["engine", "wheels", "doors", "windows"];

// console.log(carParts);

carParts.push("transmission", "tail lights", "air conditioning", "battery");

// console.log(carParts);

let lastCarPart = carParts.pop();

// console.log("list of car parts", carParts);
// console.log("last car part", lastCarPart);

let pets = ["dog", "cat", "fish", "hamster", "rabbit"];

let slicedPets = pets.slice(2);

// console.log(pets);

// console.log(slicedPets);

let fullName = ["Taylor", "Swift"];
// console.log(fullName);
// console.log(fullName.join());
// console.log(fullName.join(" "));
// console.log(fullName.toString())

// console.log("Taylor Swift".split(""))
// console.log("Taylor Swift".split(" "))
// console.log("Taylor Swift".split("T, t"))

let vegetables = ["broccoli", "cauliflower", "cabbage", "spinach"];

for(let vegetable of vegetables) {
    console.log("for of loop", vegetable.toUpperCase());
}

vegetables.forEach((vegetable) => {
    console.log("for each loop", vegetable.toUpperCase());
})

let names = ["Alice", "Catherine", "Bob", "Charlie", "David", "Tiffany", "Oscar", "Benjamin"]; 

let cNames = names.filter(name => {
    return name.charAt(0).toUpperCase() === "C";
});

console.log(cNames);

let upper = function(word) {
    return word.toUpperCase();
}

let bigNames = names.map(upper);

console.log(names);

console.log(bigNames);
