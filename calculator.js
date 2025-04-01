function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function deleteLast() {
    const display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display").value;
    try {
        const result = eval(display);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}
