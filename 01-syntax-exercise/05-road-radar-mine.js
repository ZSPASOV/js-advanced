function solve(speed, drivingArea) {
    let result;
    let areaTypes = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    let areaTypesCalc = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    areaTypesCalc[drivingArea] = areaTypesCalc[drivingArea] - speed;
    if (areaTypesCalc[drivingArea] >= 0) {
        result = `Driving ${speed} km/h in a ${areaTypes[drivingArea]} zone`
    } else if (areaTypesCalc[drivingArea] < 0 && areaTypesCalc[drivingArea] >= -20) {
        result = `The speed is ${Math.abs(areaTypesCalc[drivingArea])} km/h faster than the allowed speed of ${areaTypes[drivingArea]} - speeding`
    } else if (areaTypesCalc[drivingArea] < 0 && areaTypesCalc[drivingArea] >= -40) {
        result = `The speed is ${Math.abs(areaTypesCalc[drivingArea])} km/h faster than the allowed speed of ${areaTypes[drivingArea]} - excessive speeding`
    } else {
        result = `The speed is ${Math.abs(areaTypesCalc[drivingArea])} km/h faster than the allowed speed of ${areaTypes[drivingArea]} - reckless driving`
    }
    return result;
}


console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));
