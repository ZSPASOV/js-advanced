/*drug primer za closure, vutreshnata funkciq se izvikva vutre*/

function outerFunc() {
    let outerVar = 'Pesho';

    function innerFunc() {
        console.log(outerVar);
        return console.log('eto, varna go');
    }

    innerFunc()
}
outerFunc();

// Pesho
// eto, varna go
