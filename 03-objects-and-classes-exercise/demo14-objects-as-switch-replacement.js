// You will almost never see switch used in JS code
// Named methods are used instead

let count = 5;
switch (command) {
  case 'increment':
    count++;
    break;
  case 'decrement':
    count--;
    break;
  case 'reset':
    count = 0;
    break;
}

// shorter syntax for object methods
let countTwo = 5;
const parser = {
  increment() { countTwo++; },
  decrement() { countTwo--; },
  reset() { countTwo = 0; }
}
parser[command]();