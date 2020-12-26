const { readFileSync, appendFileSync, unlinkSync, existsSync } = require('fs')
const { resolve } = require('path')
const { workerData: { read, write, hash } } = require('worker_threads')

console.log('Process triggered.')
console.time('Execution time')

const sleep = async function () {
    return new Promise(resolve => {
        setTimeout(resolve, Math.floor(Math.random() * 5000) + 999)
    })
}

const exec = async function () {
    console.log('start reading', hash)
    await sleep()

    const writePath = resolve(write.filePath, write.fileName + '-' + hash)
    const readPath = resolve(read.filePath, read.fileName)
    const json = JSON.parse(readFileSync(readPath).toString('utf-8'))

    if (existsSync(writePath)) {
        unlinkSync(writePath)
    }

    console.log(hash)

    // json.forEach(item => {
    //     appendFileSync(writePath, JSON.stringify(item) + '\n\n\n')
    // })

    console.log('Process end.', hash)
    console.timeEnd('Execution time')
}

exec()