const buttons = document.querySelectorAll("button");

const inputField = document.getElementById("result")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        const buttonValue = buttons[i].textContent;
        if(buttonValue === "C") {
            clearDisplay();
        } else if(buttonValue === "=") {
            runCalculation();
        }else {
            appendValue(buttonValue);
        }
    })
}

const clearDisplay = () => {
    inputField.value = "";
}

const runCalculation = () => {
    inputField.value = eval(inputField.value)
}

const appendValue = (buttonValue) => {
    inputField.value += buttonValue
    // inputField.value = inputField.value + buttonValue;
}