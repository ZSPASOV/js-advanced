// Functions can be nested - hold other functions
// Inner functions have access to variables from their parent

function hypotenuse(m, n) { // outer function
    function square(num) {  // inner function
        return num * num;
    }
    return Math.sqrt(square(m) + square(n));
}
