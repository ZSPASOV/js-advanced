// literals
let bar = {
    me: "I am b1",
    speak: function () {
        console.log("Hello, " + this.me + ".");
    }
};

// constructed

function Bar(name) {
    this.me = "I am " + name;
    this.speak = function () {
        console.log("Hello, " + this.me + ".");
    };
}; 
let b1 = new Bar("b1");
