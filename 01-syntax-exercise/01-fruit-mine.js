function solve (fruit, weight, pricePerKg) {
    let weightInKg = weight / 1000
    let finalPrice = pricePerKg * weightInKg;
 
    return `I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80));