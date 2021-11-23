// Array elements are accessed using their index
let cars = ['BMW', 'Audi', 'Opel'];
let firstCar = cars[0];   // BMW
let lastCar = cars[cars.length - 1];  // Opel

// Accessing indexes that do not exist in the array returns  undefined
console.log(cars[3]);   // undefined
console.log(cars[-1]);  // undefined

// Arrays can be iterated using for-of loop
for (let car of cars) {
    console.log(car);
}

