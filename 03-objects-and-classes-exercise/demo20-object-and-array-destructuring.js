const employees = [
    { name: 'John', position: 'worker' },  // first element
    { name: 'Jane', position: 'secretary' }
];
const [{ name }] = employees; // name of first element is 'John'
console.log(name); // John

const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
};
const { employees: [empName, epnameTwo, ...restNames] } = company;
console.log(empName); // John
console.log(epnameTwo); // Jane
console.log(restNames); // ['Sam', 'Suzanne']
