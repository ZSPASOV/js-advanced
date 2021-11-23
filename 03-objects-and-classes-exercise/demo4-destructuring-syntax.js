// "Dive into" an object and extract properties by name
// Can be used to get multiple property values
const department = {
      name: 'Engineering',
      director: 'Ted Thompson',
      employeeCount: 25
    };

const {name, employeeCount } = department;
console.log(name, employeeCount); // 'Engineering' 25
console.log(typeof name);
console.log(typeof employeeCount);
    