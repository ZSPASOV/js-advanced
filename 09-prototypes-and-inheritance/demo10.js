let parent = {
    name: 'Petkancho',
    hasPen: true,
    write: function () {
        return console.log(`My name is ${this.name}`);
    }
}

Object.setPrototypeOf(parent, {isBoss: true});

let child = Object.create(parent);

child.name = 'Goshko';
child.write = () => console.log('overriden');

console.log(child.hasPen); /*true*/
parent.hasPen = false;
console.log(child.hasPen); /*false - zashtoto e promeneno v parrent-a*/