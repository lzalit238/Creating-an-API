const express = require('express');
const http = require('http');
const app = express()
const { programs } = require('./data');

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.get('/api/programs', (req, res) => {
    const newPrograms = programs.map((program) => {
        const { id, name, desc } = programs
        return { id, name, desc}
    })
    res.json(newPrograms)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
// const server = http.createServer((req, res) => {
//     //console.log(req.method)
//     const url = req.url
//     //home page
//     if (url === '/') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>Home Page </h1>')
//         res.end()
//     }
//     //about page
//     else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>About Page</h1>')
//         res.end()
//     }
//     //404
//     else {
//         res.writeHead(404, { 'content-type': 'text/html' })
//         res.write('<h1>Page not found</h1>')
//         res.end()
//     }
// })
