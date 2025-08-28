function greet() {
  document.getElementById("output").innerText = "Hello from JavaScript!";
}

module.exports = { greet };  // For testing with Jest
