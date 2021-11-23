let student2 = {
    name: 'Petkancho',
    hasPen: true,
    write: function () {
        return console.log(`My name is ${this.name}`);
    }
}

let student1 = {
    name: 'Ivancho'
}

Object.setPrototypeOf(student1, student2);

for (const key in student1) {
    if (student1.hasOwnProperty(key)) {
        console.log('own: ', key);
    } else {
        console.log('not mine: ', key);
    }
}

/*own:  name
not mine:  hasPen
not mine:  write
*/

console.log(student1); /*{name: 'Ivancho'}*/