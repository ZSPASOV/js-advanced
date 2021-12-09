// The AAA Pattern: Arrange, Act, Assert
// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];
// Act on the object or method under test
sortNums(nums);
// Assert that the obtained results are what we expect
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
}
