let brightnessInput;

function getBrightness() {
    GetBrightness.value = getBrightness.value;
}

addEventListener("DOMContentLoaded", (event) => {
    brightnessInput = document.getElementById("brightness");
    console.log(brightnessInput.value);
    brightnessInput.addEventListener("change", (event) => {
        brightnessInput.value = getBrightness.value;
        console.log(brightnessInput.value);
    })
});