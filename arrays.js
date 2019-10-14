// Make an array of the things you like


let favThings = ["Wine", "Chocolate", "Indian food", "Netflix"];




// Map over the array, then add "on the couch." to the end of each string in the array

const newArray = favThings.map((callBackName) => {
    console.log(callBackName);
    return `${callBackName} on the couch.`;
    
});

console.log(newArray);



// Filter the array to only show the items with the word "food" in it

const newArray2 = favThings.filter((cbName) => {
    // return (cbName.includes("food"));

    if (cbName.includes("food")) {
        return cbName;
    };
});

console.log(newArray2);



// Use an array method to turn the array into one string


console.log(favThings.join());
