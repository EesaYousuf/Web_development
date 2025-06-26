const fs = require("fs")

const args = process.argv.slice(2)
const filePath = args[0]
if (!filePath) {
  console.log("Please provide a file path")
   process.exit(1)
}
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message)
    process.exit(1)
  }
   console.log(data.toUpperCase())
})