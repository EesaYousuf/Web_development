
const fs = require("fs")
const path = require("path")

const file = path.join(__dirname, "todo.json")
const args = process.argv.slice(2)
const command = args[0]


function loadTodos() {
  if (!fs.existsSync(file)) return []
  const data = fs.readFileSync(file, "utf8")
  return JSON.parse(data)
}
function saveTodos(todos) {
  fs.writeFileSync(file, JSON.stringify(todos, null, 2))
}
function listTodos() {
  const todos = loadTodos()
  if (todos.length === 0) {
    console.log("No tasks found")
    return
  }
  todos.forEach((todo, i) => {
    const status = todo.done ? "[x]" : "[ ]"
    console.log(`${i + 1}. ${status} ${todo.task}`)
  })
}
function addTodo(task) {
  if (!task) {
    console.log("Please provide a task to add")
    return
  }
  const todos = loadTodos()
  todos.push({ task, done: false })
  saveTodos(todos)
  console.log("Task added")
}
function markDone(index) {
  const todos = loadTodos()
  if (index < 1 || index > todos.length) {
    console.log("Invalid task number")
    return
  }
  todos[index - 1].done = true
  saveTodos(todos)
  console.log("Task marked as done")
}

function removeTodo(index) {
  const todos = loadTodos()
  if (index < 1 || index > todos.length) {
    console.log("Invalid task number")
    return
  }
  todos.splice(index - 1, 1)
  saveTodos(todos)
  console.log("Task removed")
}
switch (command) {
  case "list":
    listTodos()
    break
  case "add":
    addTodo(args.slice(1).join(" "))
    break
  case "done":
    markDone(parseInt(args[1]))
    break
  case "remove":
    removeTodo(parseInt(args[1]))
    break
  default:
    console.log("Usage: todo-cli.js [list | add TASK | done INDEX | remove INDEX]")
}

