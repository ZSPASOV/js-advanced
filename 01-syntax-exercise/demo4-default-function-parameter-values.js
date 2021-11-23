// Functions can have default parameter values

function printStars(count = 5) {
    console.log("*".repeat(count));
}

printStars();
printStars(25);
printStars(3, 5, 8);