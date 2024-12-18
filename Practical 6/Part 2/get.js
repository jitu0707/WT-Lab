//For get Method

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(` 
        <h1>User Information Form</h1> 
        <form method="GET" action="/submit"> 
            <label for="name">Name:</label> 
            <input type="text" id="name" name="name" required> 
            <br><br> 
            <label for="email">Email:</label>
             <input type="email" id="email" name="email" required> 
            <br><br> 
            <button type="submit">Submit</button> 
        </form> 
    `);
});

app.get("/submit", (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  res.send(`<h1>User Information Submitted</h1> 
              <p>Name: ${name}</p> 
              <p>Email: ${email}</p>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
