const { set } = require("cypress/types/lodash")

const timerPromise = () =>
new Promise ((resolve,reject) =>
setTimeout(() => resolve(), 2000))

const asyncFn = async() =>{
    console.log('Start Time')
const startTime = performance.now()
await timerPromise()
const endTimer = performance.now()
console.log('Time ended', endTimer-startTime)

}

asyncFn()