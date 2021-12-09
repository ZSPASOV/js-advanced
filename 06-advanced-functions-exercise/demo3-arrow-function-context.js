// this retains the value of the enclosing lexical context

const obj = {
  name: 'Peter',
  outer() {
    console.log(this); // Object {name: "Peter"}
    const inner = () => console.log(this);
    inner();
  }
}
obj.outer(); // Object {name: "Peter"}
