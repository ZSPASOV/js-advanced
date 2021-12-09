// The static keyword defines a static method for a class
class MyClass {
    static staticMethod() { return 'Static call'; }
//   Static methods are part of the class and not of its instances
// They can only access other static methods via this context

    static anotherStaticMethod() {
            return this.staticMethod() + ' from another method';
        }
  }
  

console.log(MyClass.staticMethod())
console.log(MyClass.anotherStaticMethod())