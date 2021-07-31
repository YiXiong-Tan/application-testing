function calculate(inputValue) {

    const expression = /\+|\-|\*|\//

    const number = inputValue.split(expression)
    // debugger;
    console.log(number);
    const numberOne = parseInt(number[0])
    const numberTwo = parseInt(number[1])

    const operation = inputValue.match(expression)

    if (operation === null || Number.isNaN(numberOne) || Number.isNaN(numberTwo)) {
        updateResult('Operation not working')
        return
    }

    const calculator = new Calculator()
    calculator.add(numberOne)

    let result
    switch (operation[0]) {
        case '+':
            result = calculator.add(numberTwo)
            break;
        case '-':
            result = calculator.subtract(numberTwo)
            break;
        case '/':
            result = calculator.divide(numberTwo)
            break;
        case '*':
            result = calculator.multiply(numberTwo)
            break;

    }

    updateResult(result)

    function updateResult(result) {
        const element = document.getElementById('result')
        if(element) {
            element.innerText = result
        }
    }
}