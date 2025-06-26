#!/usr/bin/env node

const https = require("https")

const args = process.argv.slice(2)
const city = args.join(" ")

if (!city) {
  console.error("Please provide a city name")
  process.exit(1)
}

const apiKey = "demo"
const url = `https://wttr.in/${city}?format=3`

https.get(url, res => {
  let data = ""
  res.on("data", chunk => data += chunk)
  res.on("end", () => console.log(data))
}).on("error", err => {
  console.error("Error fetching weather:", err.message)
})