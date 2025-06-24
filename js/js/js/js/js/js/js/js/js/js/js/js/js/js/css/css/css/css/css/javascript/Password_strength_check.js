

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter your password: ", (password) => {
  const length = password.length >= 8;
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const digit = /\d/.test(password);
  const special = /[\W]/.test(password);

  const passed = [length, upper, lower, digit, special].filter(Boolean).length;

  if (passed === 5){
    console.log("Strength: 🔒 Strong");
  }
  else if (passed >= 3) {
    console.log("Strength: ⚠️ Moderate");
  } else {
    console.log("Strength: ❌ Weak");
  }
   rl.close();
});
