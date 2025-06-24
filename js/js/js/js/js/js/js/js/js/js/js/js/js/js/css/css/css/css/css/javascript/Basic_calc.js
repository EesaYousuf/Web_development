const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("Simple CLI Calculator");
rl.question("Enter first number: ", (num1) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (num2) => {
        let result;
      const a = parseFloat(num1);
      const b = parseFloat(num2);
        switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : 'Error (divide by zero)'; break;
        default: result = 'Invalid operator';
      }
    console.log(`Result: ${result}`);
    rl.close();
     });
  });
});
