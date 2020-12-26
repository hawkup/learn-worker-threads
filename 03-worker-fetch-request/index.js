const { Worker, isMainThread, parentPort } = require('worker_threads')
const fetch = require('node-fetch')

new Worker('./worker.js', { workerData: { url: 'https://jsonplaceholder.typicode.com/todos/1' } })
new Worker('./worker.js', { workerData: { url: 'https://jsonplaceholder.typicode.com/todos/2' } })
new Worker('./worker.js', { workerData: { url: 'https://jsonplaceholder.typicode.com/todos/3' } })
new Worker('./worker.js', { workerData: { url: 'https://jsonplaceholder.typicode.com/todos/4' } })



const exec = async function (url) {
    const response = await fetch(url)
    const body = await response.json()

    console.log(body)
}

exec('https://jsonplaceholder.typicode.com/todos/1')
exec('https://jsonplaceholder.typicode.com/todos/2')
exec('https://jsonplaceholder.typicode.com/todos/3')
exec('https://jsonplaceholder.typicode.com/todos/4')