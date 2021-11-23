function solve() {
    let boxElement = document.getElementById('box');

    boxElement.addEventListener('click', function(e) {
        console.log(this === e.currentTarget); /*e.currentTarget e context-a, zatova shte vurne true*/
        console.log(this === boxElement); /*true*/
        console.log(this === e); /*e.currentTarget e ne e context-a, zatova shte vurne false*/
    });
}