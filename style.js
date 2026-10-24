window.addEventListener('DOMContentLoaded', (event) => {
const themeButton = document.getElementById("themeButton");

if (!themeButton) {
        return;
    }

const toggleDarkMode = () => {
const body = document.body;

if (body.style.backgroundColor === 'rgb(51, 51, 51)' || body.style.backgroundColor === '#333333') {
       body.style.backgroundColor = '#ffffff';
       body.style.color = '#000000';
        } else {
        body.style.backgroundColor = '#333333';
        body.style.color = '#ffffff';
        }
    };

    themeButton.addEventListener("click", toggleDarkMode);
});
