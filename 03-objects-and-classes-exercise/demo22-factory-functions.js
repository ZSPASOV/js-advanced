// Functions that compose and return objects
function createRect(width, height) {
    const rect = { width, height };
    rect.getArea = () => {
        return rect.width * rect.height;
    };
    return rect;
}

// Creating objects with factory functions can avoid the pitfalls of using this

figure = createRect(5, 10);
console.log(figure); // {width: 5, height: 10, getArea: ƒ}

console.log(figure.getArea()); // 50