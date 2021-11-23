// First-class functions – a function can be passed as an argument to other functions
// Can be returned by another function and can be assigned as a value to a variable
// A programming language is said to have First-class functions when functions in that language are treated like any other variable.

function running() {
    return "Running";
}

function category(run, type) {
    console.log(run() + " " + type);
}
category(running, "sprint"); //Running sprint
