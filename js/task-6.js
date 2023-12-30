 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }
  
function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', function() {
    const input = document.querySelector('input');
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    } else {
      return console.log("Chose number between 1 and 100!")
    }

  });

  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);