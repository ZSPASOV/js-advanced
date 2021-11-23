function solve(firstStr, secondStr, thirdStr) {
    sum = firstStr.length + secondStr.length + thirdStr.length 
    average = Math.round((sum / 3 ))
    console.log(sum)
    console.log(average)
}

solve('chocolate', 'ice cream', 'cake')