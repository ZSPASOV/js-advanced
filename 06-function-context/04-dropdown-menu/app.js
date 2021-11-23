function solve() {
    let dropdownElement = document.getElementById('dropdown-ul');
    let dropdownButtonElement = document.getElementById('dropdown');
    let boxElement = document.getElementById('box');

    dropdownButtonElement.addEventListener('click', () => {
        let toggledDisplay = dropdownElement.style.display != 'block'
            ? 'block'
            : 'none';

        if (toggledDisplay == 'none') {
            boxElement.style.backgroundColor = 'black';
            boxElement.style.color = 'white';
        }

        dropdownElement.style.display = toggledDisplay;
    });

    dropdownElement.addEventListener('click', e => {
        boxElement.style.background = e.target.textContent;
        boxElement.style.color = 'black';
    });
}