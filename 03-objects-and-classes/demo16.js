let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

// v1
for (const key of Object.keys(person)) {
    console.log(key);
}

// v2
for (const value of Object.values(person)) {
    console.log(value);
}