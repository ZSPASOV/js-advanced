// A class may have methods, which will be available to its instances

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Method
    calcArea() { return this.height * this.width; }
}
const square = new Rectangle(10, 10);
console.log(square.calcArea()); // 100
