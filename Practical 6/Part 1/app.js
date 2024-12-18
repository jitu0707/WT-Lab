//Q1. Create an application to establish a connection with the MySQL database and perform basic database operations on it

const mysql = require("mysql");
// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost", // Your MySQL server host
  user: "root", // Your MySQL username
  password: "", // Your MySQL password
  database: "testdb", // Your MySQL database name
});
// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as ID", connection.threadId);
});
// Function to create a new user
const createUser = (name, email) => {
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  connection.query(query, [name, email], (err, results) => {
    if (err) throw err;
    console.log("User created with ID:", results.insertId);
  });
};

// Function to read users
const readUsers = () => {
  const query = "SELECT * FROM users";
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log("Users:", results);
  });
};

// Function to update a user
const updateUser = (id, name, email) => {
  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  connection.query(query, [name, email, id], (err, results) => {
    if (err) throw err;
    console.log("User updated:", results.affectedRows);
  });
};

// Function to delete a user
const deleteUser = (id) => {
  const query = "DELETE FROM users WHERE id = ?";
  connection.query(query, [id], (err, results) => {
    if (err) throw err;
    console.log("User deleted:", results.affectedRows);
  });
};

createUser("Peter Parker", "peterparker.com");
createUser("Rishab Pant", "rishabpant@gmail.com");
readUsers();
updateUser(6, "Manoj Kumar", "manojkumsr@gmail.com");
deleteUser(8); // Assuming user with ID 8 exists
connection.end();
