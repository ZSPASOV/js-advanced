// Visual Studio Code has a built-in debugger
// It provides:
// Breakpoints
// Ability to trace the code execution
// Ability to inspect variables at runtime
function solve() {
    let count = 0;
    for (let i = 0; i <= 10; i++) {
        count += i;
    }
    console.log(count);
}
solve();

// Start without Debugger: [Ctrl+F5]
// Start with Debugger: [F5]
// Toggle a breakpoint: [F9]
// Trace step by step: [F10]
// Force step into: [F11]
