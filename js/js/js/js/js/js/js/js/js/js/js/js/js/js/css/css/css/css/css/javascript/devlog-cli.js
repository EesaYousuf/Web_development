

const fs = require("fs")
const path = require("path")
const readline = require("readline")
const file = path.join(__dirname, "devlog.txt")
const args = process.argv.slice(2)
const command = args[0]
if (!command) {
  console.log("Usage: devlog-cli.js [add | view | clear]")
  process.exit(1)
}
if (command === "view") {
  if (!fs.existsSync(file)) {
    console.log("No log found")
    process.exit(0)
  }
  const log = fs.readFileSync(file, "utf8")
  console.log(log.trim() === "" ? "Log is empty" : log)
}
else if (command === "add") {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const timestamp = new Date().toISOString()
  fs.appendFileSync(file, `\n[${timestamp}]\n`)

  console.log("Enter your log entry. Press Ctrl+D or Ctrl+C to save:")

  rl.on("line", line => {
    fs.appendFileSync(file, line + "\n")
  })
rl.on("close", () => {
    console.log("Log entry saved.")
  })
}
else if (command === "clear") {
  fs.writeFileSync(file, "")
  console.log("Log cleared.")
}
else {
  console.log("Unknown command")
}
