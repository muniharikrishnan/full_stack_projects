let display = document.getElementById('main');

function diplay(value) {
    display.value += value;
}

function toclear() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
