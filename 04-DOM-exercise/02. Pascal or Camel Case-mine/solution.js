function solve() {
  words = document.getElementById('text').value.toLowerCase();
  casing = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  function toPascalCase(input) {
    let output = '';
    let arr = input.split(' ');
    arr.forEach((element) => output += element[0].toUpperCase() + element.slice(1));
    return output;
  }

  function toCamelCase(input) {
    let output = '';
    let arr = input.split(' ');
    let firstWord = arr.shift().toLowerCase();
    arr.forEach((element) => output += element[0].toUpperCase() + element.slice(1));
    return firstWord += output;
  }


  if (casing === 'Pascal Case') {
    return result.innerHTML = toPascalCase(words);
  } else if (casing === 'Camel Case') {
    return result.innerHTML = toCamelCase(words);
  } else {
    return result.innerHTML = 'Error!'
  }
}
