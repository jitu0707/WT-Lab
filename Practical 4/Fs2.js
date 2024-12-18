//fs.js File (Create , write, read, delete) Operation :

const fs = require("fs");

const content = "Hello, this is a demonstration of file operations in Node.js!";

// 1. Create & Write Operation
fs.writeFile("example.txt", content, (err) => {
  if (err) {
    return console.error(`Error creating and writing to file: ${err.message}`);
  }
  console.log(`File "example.txt" created and written successfully.`);

  // 2. Read Operation
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      return console.error(`Error reading file: ${err.message}`);
    }
    console.log(`File content: ${data}`);

    // 3. Delete Operation

    fs.unlink("example.txt", (err) => {
      if (err) {
        return console.error(`Error deleting file: ${err.message}`);
      }
      console.log(`File "example.txt" deleted successfully.`);
    });
  });
});
