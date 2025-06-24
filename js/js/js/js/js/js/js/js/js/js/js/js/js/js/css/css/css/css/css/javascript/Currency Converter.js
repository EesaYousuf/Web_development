const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const rates = { USD: 83, EUR: 90, GBP: 105 };
rl.question("Enter amount in INR: ", (amount) => {
    console.log(`USD: ${(amount / rates.USD).toFixed(2)}`);
    console.log(`EUR: ${(amount / rates.EUR).toFixed(2)}`);
    console.log(`GBP: ${(amount / rates.GBP).toFixed(2)}`);
    rl.close();
});
