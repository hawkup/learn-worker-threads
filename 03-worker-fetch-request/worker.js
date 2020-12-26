const fetch = require('node-fetch')
const { workerData: { url } } = require('worker_threads')

const exec = async function () {
    console.time('exec')
    const response = await fetch(url)
    const body = await response.json()

    console.log(body)
    console.timeEnd('exec')
}

exec()