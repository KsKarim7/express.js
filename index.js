const express = require('express');
const fs = require('fs');

const app = express()

app.get('/', (req, res) => {
    fs.readFile('./pages/index.html', (err, data) => {
        if (err) {
            console.log('error', err)
            res.send('<h1>Error Found</h1>')
        }
        else {
            res.write(data)
            res.end()
        }
    })
});
app.get('/about', (req, res) => {
    fs.readFile('./pages/about.html', (err, data) => {
        if (err) {
            console.log('error', err)
            res.send('<h1>Error Found</h1>')
        }
        else {
            res.write(data)
            res.end()
        }
    })
});
app.get('/contact', (req, res) => {
    fs.readFile('./pages/contact.html', (err, data) => {
        if (err) {
            console.log('error', err)
            res.send('<h1>Error Found</h1>')
        }
        else {
            res.write(data)
            res.end()
        }
    })
});

app.listen(4000, () => {
    console.log("Hello server from PORT 4000")
})