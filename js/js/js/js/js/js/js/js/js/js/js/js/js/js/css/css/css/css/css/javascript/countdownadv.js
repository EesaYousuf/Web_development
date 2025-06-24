const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter countdown time in seconds: ", (sec) => {
  let time = parseInt(sec);
   const interval = setInterval(() => {
    if (time <= 0){
      console.log("⏰ Time's up!");
      clearInterval(interval);
      rl.close();
    } 
    else {
      console.log(`⏳ ${time} sec left`);
      time--;}
  }, 1000);
});
