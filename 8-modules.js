//Module
const names = require('./4-names') 
const sayHi = require('./5-utilis')
const data = require('./6-alternative-flavor')
require(`./7-mind-grenade`)

sayHi(`susan`)
sayHi(names.john)
sayHi(names.peter)

// operating system (os)
const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user);

// method return system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);
// const uptime = os.uptime()

const currentOS = {
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
}
console.log(currentOS);