function a() {
    console.log(this);
}

const obj = {
    a: 5, 
    b: 10,
    c: function() {
        console.log(this);

        let func = () => {
            console.log(this);
        }
        func();
        function asd() {
            console.log(this);
        }
        asd()
    },
}

a();
obj.c();