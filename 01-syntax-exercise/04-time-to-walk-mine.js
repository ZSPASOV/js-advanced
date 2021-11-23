function solve (steps, footprintLengthMeters, speedKmH) {
    let distanceInKiloMeters = steps * footprintLengthMeters / 1000;
    let minutesRest = Math.floor(distanceInKiloMeters / 0.5)
    let minutesTraveled = distanceInKiloMeters / speedKmH * 60;
    let totalMinutes = minutesRest + minutesTraveled;
    let secondsTraveled = minutesTraveled % 1 * 60;
    let hoursTraveled = Math.floor(totalMinutes / 60);
    if (hoursTraveled < 10) {
        return `0${hoursTraveled}:${Math.floor(totalMinutes)}:${Math.round(secondsTraveled)}`
    }
    return `${hoursTraveled}:${Math.floor(totalMinutes)}:${Math.round(secondsTraveled)}`
}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));