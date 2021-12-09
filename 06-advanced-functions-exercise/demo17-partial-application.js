// Set some of the arguments of a function, without executing it
// Pass the remaining arguments when a result is needed
// The partially applied function can be used multiple times
// It will retain all fixed arguments, regardless of context

f = (x, y) => x + y
g = (x) => f(1, x)

Math.pow(x,y);
squared = (x) => Math.pow(x, 2);

