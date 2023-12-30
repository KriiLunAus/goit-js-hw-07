`use strict`

const textInput = document.getElementById("name-input");

const textOutput = document.getElementById("name-output");


textInput.addEventListener("input", (event) => {
    const trimedOutput = event.currentTarget.value.trim();

    if (trimedOutput !== "") {
        textOutput.textContent = trimedOutput;
    } else {
        textOutput.textContent = "Anonymous!"
    }
});