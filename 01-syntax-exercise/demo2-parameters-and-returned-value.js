// You can receive parameters with no value
// The unused parameters are ignored

function foo(a,b,c){
      console.log(a);
      console.log(b);
      console.log(c); //undefined
    }

foo(1,2);

    
foo(10, 11, 12, 13, 14, 15, 16, 17);


// Functions can yield a value with the return operator
function identity(param){
    return param;
  }
  
console.log(identity(5)) // 5
