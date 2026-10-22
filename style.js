let brightnessInput;
let controlPanel;

window.addEventListener("DOMContentLoaded", (event) => {
    brightnessInput = document.getElementById("brightness");
    controlPanel = document.getElementById("controlPanel");

    if (brightnessInput) {
        console.log("Initial brightness:", brightnessInput.value);
    }

    brightnessInput.addEventListener("input", (event) => {
        let currentVal = event.target.value;
        console.log("currentBrightness:", currentVal);

        if (controlPanel) {
            controlPanel.style.filter = `brightness(${currentVal})`;
            console.log("Applied CSS filter:", `brightness(${currentVal})`);
        }
    })
})