const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter file path to read: ", (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) return console.error("Error:", err.message);
        console.log("File Content:\n", data);
        rl.close();
        });
});
