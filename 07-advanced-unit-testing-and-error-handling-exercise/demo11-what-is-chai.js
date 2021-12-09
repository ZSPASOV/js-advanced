// A library with many assertions
// Allows the usage of a lot of different assertions such as assert.equal

let assert = require("chai").assert;
describe("pow", function() {
   it("2 raised to power 3 is 8", function() {
    assert.equal(pow(2, 3), 8);
  });
});
