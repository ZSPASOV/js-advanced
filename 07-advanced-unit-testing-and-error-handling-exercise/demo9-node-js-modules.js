// require() is used to import modules
const http = require('http');
// For NPM packages

const myModule = require('./myModule.js');
// For internal modules

// Internal modules need to be exported before being required
// In Node.js each file has its own scope


// Whatever value has module.exports will be the value when using require
const myModule = () => {... };
module.exports = myModule;

// To export more than one function, the value of module.exports will be an object

module.exports = {
    toCamelCase: convertToCamelCase,
    toLowerCase: convertToLowerCase,
};

