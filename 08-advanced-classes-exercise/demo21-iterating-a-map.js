// To print a map simply use one of the iterators inside a for-of

let phonebookMap = new Map();
phonebookMap.set(1, 'one');
phonebookMap.set(2, 'two');

let iterable = phonebookMap.keys();
for(let key of iterable) {
  console.log(`${key} => ${phonebookMap.get(key)}`);
}

for(let [key, value] of phonebookMap) {
    console.log(`${key} => ${value}`);
  }
  