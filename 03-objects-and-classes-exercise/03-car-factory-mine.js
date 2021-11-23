function solve(carObj) {
    let outputCarObj = {}
    let smallEngine = {
        power: 90,
        volume: 1800
    }
    let normalEngine = {
        power: 120,
        volume: 2400
    }
    let monsterEngine = {
        power: 200,
        volume: 3500
    }
    outputCarObj.model = carObj.model;

    if (carObj.power <= 90) {
        outputCarObj.engine = smallEngine;
    } else if (90 < carObj.power && carObj.power <= 120) {
        outputCarObj.engine = normalEngine;
    } else if (carObj.power >= 200) {
        outputCarObj.engine = monsterEngine;
    }

    outputCarObj.carriage = {};
    outputCarObj.carriage.type = carObj.carriage;
    outputCarObj.carriage.color = carObj.color;
    outputCarObj.wheels = [];
    let wheelToAdd;

    if (carObj.wheelsize % 2 === 0) {
        wheelToAdd = carObj.wheelsize - 1;
    } else {
        wheelToAdd = carObj.wheelsize
    }

    for (let _ = 0; _ < 4; _++) {
        outputCarObj.wheels.push(wheelToAdd);
    }

    return outputCarObj;
}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));



let input = {
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
};

console.log(solve(input));