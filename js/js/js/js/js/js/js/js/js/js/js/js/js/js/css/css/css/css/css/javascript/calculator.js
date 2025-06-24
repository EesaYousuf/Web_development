const args = process.argv.slice(2)

if (args.length !== 3) {
  console.log("Usage: node calc.js num1 operator num2")
  process.exit(1)
}
const num1 = parseFloat(args[0])
const operator = args[1]
const num2 = parseFloat(args[2])
if (isNaN(num1) || isNaN(num2)) {
  console.log("Both operands must be numbers")
  process.exit(1)
}
let result

switch (operator) {
  case "+":
    result = num1 + num2
    break;
    case "-":
    result = num1 - num2
    break
  case "*":
    result = num1 * num2
    break
  case "/":
    if (num2 === 0) {
      console.log("Cannot divide by zero")
      process.exit(1)
    }
     result = num1 / num2
    break;
    default:
    console.log("Unsupported operator")
    process.exit(1)
}
console.log(result)
