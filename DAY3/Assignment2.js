const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;

function updateNameDisplay() {
    const nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = names[currentIndex];
}

document.getElementById('nextButton').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % names.length;
    updateNameDisplay();
});

document.getElementById('prevButton').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    updateNameDisplay();
});

function getRandomColor(){
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function changeBackgroundColor(){
  document.body.style.backgroundColor = getRandomColor();
}
document.body.addEventListener('click', changeBackgroundColor);
