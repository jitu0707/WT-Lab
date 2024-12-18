//Q1. Create an HTTP Server and perform operations on it.

const http = require("http");
const port = 3000;
// Define add and sub functions
let add = (a, b) => {
  return a + b;
};
let sub = (a, b) => {
  return a - b;
};
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  const responseMessage = `Welcome to the Home Page!\nAddition of 10 and 5 is: ${add(
    10,
    5
  )}\nSubtraction of 20 and 10 is: ${sub(20, 10)}`;
  res.end(responseMessage);
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//For running this server run the command: node server.js
