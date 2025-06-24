const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log(`
❌ Incorrect usage!

✅ Example:
  node calc.js add 5 3
  node calc.js sub 10 4
  node calc.js mul 6 7
  node calc.js div 20 4
`);
  process.exit(1);
}
const [operation, num1Str, num2Str] = args;
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
  console.log("❌ Please provide valid numbers.");
  process.exit(1);
}
switch (operation) {
  case "add":
    console.log(`🔢 ${num1} + ${num2} = ${num1 + num2}`);
    break;

  case "sub":
    console.log(`🔢 ${num1} - ${num2} = ${num1 - num2}`);
    break;
    case "mul":
    console.log(`🔢 ${num1} * ${num2} = ${num1 * num2}`);
    break;

  case "div":
    if (num2 === 0) {
      console.log("🚫 Division by zero is not allowed.");
    } else {
      console.log(`🔢 ${num1} / ${num2} = ${num1 / num2}`);
    }
    break;
    default:
    console.log("❌ Unknown operation. Use add, sub, mul, or div.");
    break;
}
