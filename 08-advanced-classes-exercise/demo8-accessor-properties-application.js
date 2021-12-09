// Accessors are often used for validation
// The setter can verify that a given value meets requirements

class Circle {
    constructor(radius) { this.radius = radius; }
    get diameter() { // property getter
        return 2 * this.radius;
    }
    set diameter(value) {
        if (value <= 0) {
            throw new Error('Diameter must be positive');
        }
        this.radius = value / 2;
    }
}

// Properties without a setter are read-only (cannot be assigned)
// Getters can be used for a validated or calculated property

