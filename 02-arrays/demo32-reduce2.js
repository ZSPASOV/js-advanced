let names = ['Superman', 'Spiderman', 'Batman', 'Wonderwoman', 'Superwoman', 'Ironman'];

let sum = names.reduce((accumulator, element) => accumulator + element[0], '')

console.log(sum);