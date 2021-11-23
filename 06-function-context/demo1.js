function speak() {
    return this;
}

let context = speak();

console.log(context === global);  /*true */
console.log(context === globalThis);  /*true */