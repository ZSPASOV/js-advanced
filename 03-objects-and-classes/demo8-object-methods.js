let person = {
        firstName: "John",
        lastName: "Doe",
        age: function (myAge) {
            return `My age is ${myAge}!`    }
    };
    console.log(person.age(21)); // My age is 21!