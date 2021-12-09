// Calls a function with a given this value, and arguments provided as an array
// apply() accepts a single array of arguments, while call() accepts an argument list
// If the first argument is undefined or null a similar outcome can be achieved using the array spread syntax

const firstPerson = {
    name: "Peter",
    prof: "Fisherman",
    shareInfo: function () {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};
const secondPerson = {
    name: "George",
    prof: "Manager"
};
firstPerson.shareInfo(); // Peter works as a Fisherman
firstPerson.shareInfo.apply(secondPerson); // George works as a Manager