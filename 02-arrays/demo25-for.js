let names = ['superman', 'spiderman', 'batman']

for  (const name of names) {
    console.log(name);
}

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31