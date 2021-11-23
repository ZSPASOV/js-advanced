let student2 = {
    name: 'Petkancho',
    hasPen: true,
    write: function () {
        return console.log(`My name is ${this.name}`);
    }
}

let newStudent = Object.setPrototypeOf({}, student2);

newStudent.name = 'Ivancho2';

newStudent.write(); /*My name is Ivancho2*/
student2.write(); /*My name is Petkancho*/

