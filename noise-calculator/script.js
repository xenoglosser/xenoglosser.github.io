let display;

function appendToDisplay(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}

function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}