function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return generatePin();
  }
}

function getPin() {
  document.getElementById("display-pin").value = generatePin();
}

document.getElementById("key-pad").addEventListener("click", (e) => {
  const numbers = e.target.innerText;

  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      calcInput.value = "";
    }
  } else {
    const newNumber = calcInput.value + numbers;
    calcInput.value = newNumber;
  }
});

function pinMatcher() {
  const pin = document.getElementById("display-pin").value;
  const typedPin = document.getElementById("typed-numbers").value;
  const fail = document.getElementById("notify-fail");
  const success = document.getElementById("notify-success");

  if (pin == typedPin) {
    success.style.display = "block";
    fail.style.display = "none";
  } else {
    success.style.display = "none";
    fail.style.display = "block";
  }
}
