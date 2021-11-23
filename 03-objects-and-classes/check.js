distance = Math.sqrt((1 - 2) ** 2 + (1-1) ** 2);
let status = 'invalid';
if (Number.isInteger(distance)) {
    status = 'valid'
}
console.log(status)
console.log(distance);
