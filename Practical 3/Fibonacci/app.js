// app.js
const { fibonacci } = require("./Fibonacci"); // Import the Fibonacci function

const terms = 10; // Number of terms to generate
const series = fibonacci(terms); // Generate the Fibonacci series

console.log(`Fibonacci series up to ${terms} terms:`, series.join(", "));
