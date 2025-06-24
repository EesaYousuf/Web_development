
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your weight (kg): ", (weight) => {
    rl.question("Enter your height (m): ", (height) => {
        const bmi = parseFloat(weight) / (parseFloat(height) ** 2);
        console.log(`Your BMI is: ${bmi.toFixed(2)}`);
        if (bmi < 18.5) console.log("Underweight");
        else if (bmi < 24.9) console.log("Normal");
        else if (bmi < 29.9) console.log("Overweight");
        else console.log("Obese"); 
        rl.close();
  });
});

