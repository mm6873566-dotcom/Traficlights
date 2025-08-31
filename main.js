const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

function resetLights() {
  redLight.style.background = "gray";
  yellowLight.style.background = "gray";
  greenLight.style.background = "gray";
}

document.getElementById("redBtn").addEventListener("click", () => {
  resetLights();
  redLight.style.background = "red";
});

document.getElementById("yellowBtn").addEventListener("click", () => {
  resetLights();
  yellowLight.style.background = "yellow";
});

document.getElementById("greenBtn").addEventListener("click", () => {
  resetLights();
  greenLight.style.background = "green";
});