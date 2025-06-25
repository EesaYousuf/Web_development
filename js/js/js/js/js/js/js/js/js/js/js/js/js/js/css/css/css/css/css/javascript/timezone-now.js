const args = process.argv.slice(2)
const tz = args[0]
if (!tz) {
    console.log("Usage: timezone-now.js <time-zone>")
    process.exit(1)
}
try {
    const now = new Date().toLocaleString("en-US", { timeZone: tz })
  console.log(`Current time in ${tz}: ${now}`)
  } catch {
     console.log("Invalid time zone")
}
