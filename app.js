// app.js
// Connects the inputs on the page to calculateFee() in fees.js

const propertyInput = document.getElementById("propertyValue");
const bondInput = document.getElementById("bondValue");
const transferOutput = document.getElementById("transferFee");
const bondOutput = document.getElementById("bondFee");

// "1 500 000" or "R1,500,000" -> 1500000
function parseRand(text) {
  const digits = text.replace(/\D/g, "");
  return digits === "" ? NaN : Number(digits);
}

// 1500000 -> "R 1 500 000"
function formatRand(amount) {
  return "R " + amount.toLocaleString("en-ZA").replace(/\u00a0/g, " ");
}

function showFee(input, output) {
  const fee = calculateFee(parseRand(input.value));
  output.textContent = fee === null ? "–" : formatRand(fee);
}

function update() {
  showFee(propertyInput, transferOutput);
  showFee(bondInput, bondOutput);
}

propertyInput.addEventListener("input", update);
bondInput.addEventListener("input", update);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}