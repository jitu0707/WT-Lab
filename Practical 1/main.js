// Create an application to demonstrate Node.js Modules
//Create node js application and use built in module as well as create own modules

const fs = require("fs");
const math = require("./mathOperator");
const sum = math.add(5, 3);
const sub = math.sub(10, 5);
const product = math.multiply(5, 3);
const division = math.divide(10, 2);
const message = ` Sum of 5 and 3 is: ${sum}\n Subtraction of 10 and 5 is: ${sub}\n Product 
of 5 and 3 is: ${product}\n Divsion of 10 and 2 is: ${division} `;
fs.writeFile("result.txt", message, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Results written to file successfully.");
  }
});
console.log(message);
