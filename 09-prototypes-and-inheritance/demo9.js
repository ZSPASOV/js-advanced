let student2 = {
    name: 'Petkancho',
    hasPen: true,
    write: function () {
        return console.log(`My name is ${this.name}`);
    }
}

let newStudent1 = Object.assign({}, student2);
let newStudent2 = Object.create(student2);


newStudent1.write(); /*My name is Petkancho*/
newStudent2.write(); /*My name is Petkancho*/
console.log(newStudent1); /*{name: 'Petkancho', hasPen: true, write: ƒ}*/
console.log(newStudent2); /* {} */

