let inputBox = document.getElementById("inputBox");

function appendCharacter(char) {
  inputBox.value += char;
}

function clearInput() {
  inputBox.value = "";
}

function deleteChar() {
  inputBox.value = inputBox.value.slice(0, -1);
}

function calculateResult() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (error) {
    inputBox.value = "Error";
  }
}
