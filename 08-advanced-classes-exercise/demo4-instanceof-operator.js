// The instanceof operator returns true if the given object is an instance of the specified class

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
const circle = new Circle(5);
console.log(circle instanceof Circle); // true
console.log(circle instanceof Object); // true
console.log(circle instanceof String); // false
console.log(circle instanceof Number); // false
