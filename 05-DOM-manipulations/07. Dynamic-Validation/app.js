function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', e => {
        let currentValue = e.currentTarget.value;

        let pattern = /[a-z]+@[a-z]+.[a-z]+/;

        if (pattern.test(currentValue)) { /*tova e proverka i vrushta true ili false*/
            e.currentTarget.classList.remove('error'); 
        } else {
            e.currentTarget.classList.add('error'); /*tova dobavq error-a ot .css faila*/
        }
    });
}