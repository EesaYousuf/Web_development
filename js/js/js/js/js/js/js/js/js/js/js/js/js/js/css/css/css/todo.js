

const tasks = [];

const [,, command, ...args] = process.argv;

function listTasks() {
  if (tasks.length === 0) {
    console.log("✅ No tasks yet!");
  } else {
    console.log("📋 Tasks:");
    tasks.forEach((t, i) => {
      console.log(`${i + 1}. [${t.done ? "✅" : "❌"}] ${t.text}`);
    });
  }
}
function addTask(text) {
  if (!text) return console.log("❌ Please provide a task.");
  tasks.push({ text, done: false });
  console.log(`✅ Added: "${text}"`);
}
function markDone(i) {
  const idx = Number(i) - 1;
  if (tasks[idx]) {
    tasks[idx].done = true;
    console.log(`✅ Marked done: "${tasks[idx].text}"`);
  } else {
    console.log("❌ Invalid index.");
  }
}
function deleteTask(i) {
  const idx = Number(i) - 1;
  if (tasks[idx]) {
    console.log(`🗑️ Deleted: "${tasks[idx].text}"`);
    tasks.splice(idx, 1);
  } else {
    console.log("❌ Invalid index.");
  }
}
function showHelp() {
  console.log(`
Usage:
  node todo.js list
  node todo.js add "Buy milk"
  node todo.js done 1
  node todo.js delete 2
`);
}
switch (command) {
  case "list":   listTasks(); break;
  case "add":    addTask(args.join(" ")); break;
  case "done":   markDone(args[0]); break;
  case "delete": deleteTask(args[0]); break;
  default:       showHelp(); 
}
