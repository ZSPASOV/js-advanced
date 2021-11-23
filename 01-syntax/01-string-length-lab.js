function solve(first, second, third) {
    let sum = 0;
    let average = 0;
    sum += first.length;
    sum += second.length;
    sum += third.length;

    average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average)

}

solve('chocolate', 'ice cream', 'cake');