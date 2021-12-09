// All DOM objects are instances of standard DOM classes
// Always created via factory functions, instead of with new
const divElement = document.createElement('div');
console.log(divElement instanceof HTMLDivElement); // true

// They provide many useful methods and properties
// Already seen: addEventListener, appendChild, remove, children, parentNode, textContent, value, etc.
