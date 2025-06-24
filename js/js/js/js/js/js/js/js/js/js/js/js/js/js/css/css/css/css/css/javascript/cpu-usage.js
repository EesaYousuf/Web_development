
const os = require("os")

function getCpuUsage() {
  const cpus = os.cpus()
  let totalIdle = 0
  let totalTick = 0
  cpus.forEach(cpu => {
    for (let type in cpu.times) {
      totalTick += cpu.times[type]
    }
    totalIdle += cpu.times.idle
  })
   return { idle: totalIdle / cpus.length, total: totalTick / cpus.length }
}
const start = getCpuUsage()
setTimeout(() => {
  const end = getCpuUsage()
  const idleDiff = end.idle - start.idle
  const totalDiff = end.total - start.total
  const usage = 100 - Math.round(100 * idleDiff / totalDiff)
  console.log(`CPU Usage: ${usage}%`)
  }, 1000)

