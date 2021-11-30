function encodeAndDecodeMessages() {
    const textareas = document.querySelectorAll('textarea');
    const buttons = document.querySelectorAll('button');

    const mappingObject = {
        encode: {
            text: textareas[0],
            btn: buttons[0],
            func: (char) => String.fromCharCode(char.charCodeAt(0) + 1)
        },
        decode: {
            text: textareas[1],
            btn: buttons[1],
            func: (char) => String.fromCharCode(char.charCodeAt(0) - 1)
        },
    }

    document.getElementById('main').addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }
        const type = e.target.textContent.toLowerCase().trim().includes('encode') ? 'encode' : 'decode';

        const message = mappingObject[type].text.value // взимам съобщението
            .split('').map(mappingObject[type].func).join('') // преобразувам го

        mappingObject.encode.text.value = '';
        mappingObject.decode.text.value = message;
    })

}