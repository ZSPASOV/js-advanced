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

/*tova e syntax s koito moje da dostapim prototipa na nqkoi obekt, no ne e dobre da go polzvame*/
student1.__proto__.write = () => console.log('sorry');

student1.write(); /*sorry*/
student2.write(); /*sorry - prezapisali sme funkciqta write*/

// dobriq nachin za dostapvane
let protoObject = Object.getPrototypeOf(student1);
console.log(protoObject); /*{name: 'Petkancho', hasPen: true, write: ƒ}*/