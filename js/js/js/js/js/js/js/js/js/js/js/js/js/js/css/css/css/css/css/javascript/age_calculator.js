

const args = process.argv.slice(2)
const input = args[0]
if (!input || isNaN(Date.parse(input))) {
  console.log("Usage: age-calculator.js <yyyy-mm-dd>")
  process.exit(1)
}
const birthDate = new Date(input)
const today = new Date()
let years = today.getFullYear() - birthDate.getFullYear()
let months = today.getMonth() - birthDate.getMonth()
let days = today.getDate() - birthDate.getDate()
if (days < 0) {
  months -= 1
  const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
  days += prevMonth.getDate()
  }
  if (months < 0) {
  years -= 1
  months += 12
}
console.log(`Age: ${years} years ${months} months ${days} days`)

