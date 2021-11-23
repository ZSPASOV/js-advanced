console.log(walk); //undefined
walk(); // TypeError: walk is not a function
var walk = function () {
    console.log("walking");
};
