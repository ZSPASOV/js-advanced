// Strict mode limits certain "sloppy" language features
// Silent errors will throw Exception instead
'use strict';         // File-level
mistypeVariable = 17; // ReferenceError
function strict() {
        'use strict';     // Function-level
        mistypeVariable = 17; 
    }
    


// Enabled by default in modules
