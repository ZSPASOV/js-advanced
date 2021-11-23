// Destructuring can work beyond the top level
const department = {
    name: "Engineering",
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
};
const { data: { director } } = department;
    // director is { name: 'John', position: 'Engineering Director'}
console.log(director); // {name: 'John', position: 'Engineering Director'}