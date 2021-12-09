function solve() {
    let inputElements = document.getElementsByTagName('input');
    let nameInput = inputElements[0];
    let ageInput = inputElements[1];
    let kindInput = inputElements[2];
    let ownerInput = inputElements[3];
    let addButton = document.getElementsByTagName('button')[0]
    let ulFindNew = document.getElementsByTagName('ul')[0]
    addButton.addEventListener('click', addNewPet)

    function addNewPet(e) {
        e.preventDefault()
        let nameInputValue = nameInput.value;
        let ageInputValue = Number(ageInput.value);
        let kindInputValue = kindInput.value;
        let ownerInputValue = ownerInput.value;

        if (nameInputValue !== '' && ageInputValue !== ''
            && typeof ageInputValue == 'number' && !isNaN(ageInputValue)
            && kindInputValue !== '' && ownerInputValue !== '') {

            let liEl = document.createElement('li');
            liEl.innerHTML = `<p>
                <strong>${nameInput.value}</strong> is a 
                <strong>${ageInput.value}</strong> year old 
                <strong>${kindInput.value}</strong>
                </p>
                <span>Owner: ${ownerInput.value}</span>
                <button>Contact with owner</button>`
            ulFindNew.appendChild(liEl);

            let contactWithOwnerButton = liEl.querySelectorAll('button')[0];
            contactWithOwnerButton.addEventListener('click', takeAnimal);

            function takeAnimal(e) {
                liEl.removeChild(contactWithOwnerButton);
                let divEl = document.createElement('div');
                divEl.innerHTML = `<input placeholder="Enter your names">
                                    <button>Yes! I take it!</button>`;
                liEl.appendChild(divEl);
                yesITakeItButton = divEl.querySelectorAll('button')[0];
                yesITakeItButton.addEventListener('click', adoptAnimal);
            }

            nameInput.value = '';
            ageInput.value = '';
            kindInput.value = '';
            ownerInput.value = '';


        }


        function adoptAnimal(e) {
            liEl = e.target.parentElement.parentElement;
            newOwner = liEl.querySelectorAll('input')[0];
            if (newOwner.value !== '') {
                oldOwner = liEl.querySelectorAll('span')[0];
                oldDiv = liEl.querySelectorAll('div')[0];
                oldOwner.innerHTML = `New Owner: ${newOwner.value}`
                liEl.removeChild(oldDiv);
                liEl.innerHTML += '<button>Checked</button>'
                ulEl = document.getElementById('adopted').querySelectorAll('ul')[0];
                ulEl.appendChild(liEl);
                let checkedButtons = ulEl.querySelectorAll('button');
                let arrayButtons = Array.from(checkedButtons);
                for (let i = 0; i < arrayButtons.length; i++) {
                    arrayButtons[i].addEventListener('click', deletePet)
                }
                function deletePet(e) {
                    console.log(arrayButtons.length);
                    elToRemove = e.target.parentElement
                    ulEl.removeChild(elToRemove);
                }
            }

        }

    }


}