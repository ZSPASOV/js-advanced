// Before ES6, classes were composed manually
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.width * this.height;
}

let rect = new Rectangle(3, 5);
