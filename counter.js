var counter = 0;

function updateCounter() {
  document.getElementById("counter-value").textContent = counter;
}

function setCounter() {
  var input = document.getElementById("counter-input").value;
  counter = parseInt(input);
  updateCounter();
}

function decrease() {
  counter -= 1;
  updateCounter();
}

function reset() {
  counter = 0;
  updateCounter();
}

function increase() {
  counter += 1;
  updateCounter();
}

updateCounter();
