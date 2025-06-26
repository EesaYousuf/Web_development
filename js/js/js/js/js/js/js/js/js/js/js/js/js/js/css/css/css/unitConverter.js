const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const convertMenu = `
Unit Converter:
1. Celsius to Fahrenheit
2. Meters to Kilometers
3. Kilograms to Pounds
4. Exit
Choose an option: `;
function showMenu() {
  rl.question(convertMenu, (option) => {
    switch (option) {
    case '1':
        rl.question("Enter Celsius: ", (c) => {
          console.log(`${c}°C = ${(parseFloat(c) * 9/5 + 32).toFixed(2)}°F`);
          showMenu();
        });
        break;
    case '2':
        rl.question("Enter meters: ", (m) => {
          console.log(`${m} m = ${(parseFloat(m) / 1000).toFixed(3)} km`);
          showMenu();
        });
    break;
      case '3':
        rl.question("Enter kg: ", (kg) => {
          console.log(`${kg} kg = ${(parseFloat(kg) * 2.20462).toFixed(2)} lbs`);
          showMenu();
        });
        break;
      case '4':
        rl.close();
        break;
        default:
        console.log("Invalid choice");
        showMenu();
    }
    });
}
showMenu();