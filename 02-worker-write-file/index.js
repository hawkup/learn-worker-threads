const { Worker } = require('worker_threads')

const workerData = {
    write: { fileName: 'write.txt', filePath: './' },
    read: { fileName: 'read.json', filePath: './' }
}

new Worker('./worker.js', { workerData: { ...workerData, hash: Math.random() } })
new Worker('./worker.js', { workerData: { ...workerData, hash: Math.random() } })