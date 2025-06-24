const args = process.argv.slice(2)
const seconds = parseInt(args[0])
if (isNaN(seconds) || seconds < 1) {
  console.log("Please enter a valid number of seconds")
  process.exit(1)
}
let remaining = seconds
const interval = setInterval(() => {
  console.log(remaining)
   remaining--
   if (remaining < 0) {
    clearInterval(interval)
    console.log("Done")
  }
  }, 1000)
