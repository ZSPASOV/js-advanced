function printStars(count) {
        console.log("*".repeat(count));
    }


printStars(10);

// function declaration 
function walk() {
    console.log('walking');
}

// function expression

const anotherWalk = function () {
    console.log('walking');
}

// arrow functions
const otherWalk = () => {
    console.log('walking');
}