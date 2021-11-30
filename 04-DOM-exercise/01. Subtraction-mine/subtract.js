function subtract() {
    let numOne = document.getElementById('firstNumber').value;
    let numTwo = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');
    return result.innerHTML = numOne - numTwo;
}