function solve(number=5) {
    let string = "";
    
    for(let i = 0; i < number; i++) { // external loop
      for(let j = 0; j < number; j++) { // internal loop
        string += "* ";
      }
      // newline after each row
      string += "\n";
    }
    // printing the string
    console.log(string);
}

solve(6);
solve(1);