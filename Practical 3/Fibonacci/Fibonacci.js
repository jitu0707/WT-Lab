// fibonacci.js
function fibonacci(n) {
  let series = [];
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    series.push(a);
    let next = a + b; // Calculate next term
    a = b; // Update a
    b = next; // Update b
  }
  return series; // Return the series array
}

module.exports = { fibonacci }; // Export the function
