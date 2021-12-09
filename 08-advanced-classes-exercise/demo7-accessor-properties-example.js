class Circle {
    constructor(radius) { this.radius = radius; }
    get diameter() { // property getter
         return 2 * this.radius;
     } 
    set diameter(value) { // property setter
      this.radius = value / 2;
    }
    get area() {
      return Math.PI * (this.radius ** 2);
    }
  }
  let c = new Circle(2);
  console.log(`Radius: ${c.radius}`); // 2
  console.log(`Diameter: ${c.diameter}`); // 4
  c.diameter = 1.6;
  console.log(`Radius: ${c.radius}`); // 0.8
  console.log(`Diameter: ${c.diameter}`); // 1.6
  console.log(`Area: ${c.area}`); // 2.0106…